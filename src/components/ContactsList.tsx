import { useAppSelector } from "../redux/store";
import ContactsListItem from "./ContactsListItem";

const ContactsList = () => {
  const { contacts } = useAppSelector((state) => state.contactsSlice);
  console.log(contacts);
  return (
    <>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            <ContactsListItem contact={contact} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default ContactsList;
