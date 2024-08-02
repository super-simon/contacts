import { List, Typography } from "@mui/material";
import { useAppSelector } from "../redux/store";
import ContactsListItem from "./ContactsListItem";

const ContactsList = () => {
  const { contacts } = useAppSelector((state) => state.contactsSlice);
  console.log(contacts);
  return (
    <>
      <Typography variant="h5" gutterBottom>
        Concacts
      </Typography>
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        {contacts.map((contact) => (
          <ContactsListItem contact={contact} key={contact.id} />
        ))}
      </List>
    </>
  );
};

export default ContactsList;
