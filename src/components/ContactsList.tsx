import { Cached } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import { IconButton, List, Typography } from "@mui/material";
import { contactsActions } from "../redux/slices/contactsSlice";
import { useAppDispatch, useAppSelector } from "../redux/store";
import ContactsListItem from "./ContactsListItem";

const ContactsList = () => {
  const { contacts, isLoading, error } = useAppSelector(
    (state) => state.contactsSlice,
  );

  const dispatch = useAppDispatch();
  const handleRefresh = () => {
    dispatch(contactsActions.loadContacts());
  };
  return (
    <>
      <Typography variant="h5" gutterBottom>
        Concacts{" "}
        <IconButton
          color="secondary"
          aria-label="add an alarm"
          onClick={handleRefresh}
        >
          <Cached />
        </IconButton>
      </Typography>

      {isLoading && <LoadingButton loading={isLoading} disabled />}

      {error !== "" && error}

      {!isLoading && error === "" && (
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          {contacts.map((contact) => (
            <ContactsListItem contact={contact} key={contact.id} />
          ))}
        </List>
      )}
    </>
  );
};

export default ContactsList;
