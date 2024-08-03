import { joiResolver } from "@hookform/resolvers/joi";
import { LoadingButton } from "@mui/lab";
import { Button, TextField, Typography } from "@mui/material";
import { Dispatch, FC, SetStateAction, useState } from "react";
import { useForm } from "react-hook-form";
import { IContactItem } from "../models/IContactItem";
import { ITag } from "../models/Tag";
import { apiService } from "../services/api.service";
import { tagValidator } from "../validators/tag.validator";

interface IFormProps {
  tag: string;
}

interface IProps {
  contactId: string;
  tags: ITag[];
  updateContact: Dispatch<SetStateAction<IContactItem | null>>;
}

const TagForm: FC<IProps> = ({ contactId, tags, updateContact }) => {
  const [isFormSending, setIsFormSending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormProps>({
    mode: "all",
    resolver: joiResolver(tagValidator),
  });

  const save = (data: IFormProps) => {
    setIsFormSending(true);
    setError(null);

    apiService
      .addTag(contactId, [
        ...tags.map((tag) => {
          return tag.tag;
        }),
        data.tag,
      ])
      .then((res) => {
        updateContact(res.data);
        reset();
      })
      .catch(() => {
        setError("An error occurred while submitting the form. Try again.");
      })
      .finally(() => setIsFormSending(false));
  };

  return (
    <form onSubmit={handleSubmit(save)}>
      <TextField
        {...register("tag")}
        error={!!errors?.tag}
        helperText={errors?.tag?.message}
        margin="normal"
        fullWidth
        InputLabelProps={{ shrink: true }}
        label="New tag"
        name={"tag"}
      />
      {error && <Typography color="red">{error}</Typography>}
      {isFormSending ? (
        <LoadingButton loading={isFormSending} disabled />
      ) : (
        <Button type="submit">Add Tag</Button>
      )}
    </form>
  );
};

export default TagForm;
