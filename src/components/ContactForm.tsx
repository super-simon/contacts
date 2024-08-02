import { joiResolver } from "@hookform/resolvers/joi";
import { LoadingButton } from "@mui/lab";
import { Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { defaultContactData } from "../constants/defaults";
import { contactsActions } from "../redux/slices/contactsSlice";
import { useAppDispatch } from "../redux/store";
import { apiService } from "../services/api.service";
import { contactValidator } from "../validators/contact.validator";

interface IFormProps {
  firstName: string;
  lastName: string;
  email: string;
}

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormProps>({
    mode: "all",
    resolver: joiResolver(contactValidator),
  });

  const dispatch = useAppDispatch();

  const [isFormSending, setIsFormSending] = useState(false);

  const save = (data: IFormProps) => {
    setIsFormSending(true);
    const fields = {
      "first name": [
        { modifier: "", label: "first name", value: data.firstName },
      ],
      "last name": [{ modifier: "", label: "last name", value: data.lastName }],
      email: [{ modifier: "", label: "email", value: data.email }],
    };
    apiService
      .createContact({ ...defaultContactData, fields })
      .then(() => {
        reset();
        dispatch(contactsActions.loadContacts());
      })
      .finally(() => setIsFormSending(false));
  };
  return (
    <>
      <Typography variant="h5" gutterBottom>
        Create contact
      </Typography>
      <form onSubmit={handleSubmit(save)}>
        <TextField
          {...register("firstName")}
          error={!!errors?.firstName}
          helperText={errors?.firstName?.message}
          margin="normal"
          fullWidth
          InputLabelProps={{ shrink: true }}
          label="First Name"
          name={"firstName"}
        />
        <TextField
          {...register("lastName")}
          error={!!errors?.lastName}
          helperText={errors?.lastName?.message}
          margin="normal"
          fullWidth
          InputLabelProps={{ shrink: true }}
          label="Last Name"
          name={"lastName"}
        />
        <TextField
          {...register("email")}
          error={!!errors?.email}
          helperText={errors?.email?.message}
          margin="normal"
          fullWidth
          InputLabelProps={{ shrink: true }}
          label="Email"
          name={"email"}
        />
        {isFormSending ? (
          <LoadingButton loading={isFormSending} disabled />
        ) : (
          <Button type="submit">Add Contact</Button>
        )}
      </form>
    </>
  );
};

export default ContactForm;
