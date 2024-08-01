import { FC } from "react";
import { IContactItem } from "../models/IContactItem";

interface IProps {
  contact: IContactItem;
}

const ContactsListItem: FC<IProps> = ({ contact }) => {
  console.log("contact", contact);
  return (
    <>
      {contact.fields["first name"] && contact.fields["first name"][0].value}{" "}
      {contact.fields["last name"] && contact.fields["last name"][0].value}
      <br />
      {contact.fields["email"] && contact.fields["email"][0].value}
      {contact.tags.map((tag) => (
        <li key={tag.id}>{tag.tag}</li>
      ))}
    </>
  );
};

export default ContactsListItem;
