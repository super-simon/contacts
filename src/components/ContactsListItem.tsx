import { LoadingButton } from "@mui/lab";
import {
  Avatar,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import { FC, useState } from "react";
import { IContactItem } from "../models/IContactItem";
import { contactsActions } from "../redux/slices/contactsSlice";
import { useAppDispatch } from "../redux/store";
import { apiService } from "../services/api.service";

interface IProps {
  contact: IContactItem;
}

const ContactsListItem: FC<IProps> = ({ contact }) => {
  const [isDeleteDialogShown, setIsDeleteDialogShown] = useState(false);
  const [isDeleteSending, setIsDeleteSending] = useState(false);

  const handleShowDeleteDialog = () => {
    setIsDeleteDialogShown(true);
  };

  const handleCloseDeleteDialog = () => {
    setIsDeleteDialogShown(false);
  };

  const dispatch = useAppDispatch();

  const handleDeleteDialolg = () => {
    setIsDeleteSending(true);
    apiService
      .deleteContact(contact.id)
      .then(() => {
        dispatch(contactsActions.loadContacts());
      })
      .finally(() => {
        setIsDeleteSending(false);
      });
  };

  console.log("contact", contact);
  return (
    <>
      <Dialog
        open={isDeleteDialogShown}
        onClose={handleCloseDeleteDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"You are trying to delete a contact"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete this contact?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          {isDeleteSending ? (
            <LoadingButton loading={isDeleteSending} disabled />
          ) : (
            <Button onClick={handleDeleteDialolg} autoFocus>
              Yes
            </Button>
          )}
          <Button onClick={handleCloseDeleteDialog}>No</Button>
        </DialogActions>
      </Dialog>

      <ListItem
        alignItems="flex-start"
        secondaryAction={<Button onClick={handleShowDeleteDialog}>x</Button>}
      >
        <ListItemAvatar>
          <Avatar
            alt={`${
              contact.fields["first name"]
                ? contact.fields["first name"][0].value
                : ""
            } ${
              contact.fields["last name"]
                ? contact.fields["last name"][0].value
                : ""
            }`}
            src="/static/images/avatar/1.jpg"
          />
        </ListItemAvatar>
        <ListItemText
          primary={
            <b>
              {contact.fields["first name"]
                ? contact.fields["first name"][0].value
                : ""}{" "}
              {contact.fields["last name"]
                ? contact.fields["last name"][0].value
                : ""}
            </b>
          }
          secondary={
            <>
              <em>
                {contact.fields["email"] && contact.fields["email"][0].value}{" "}
              </em>

              {contact.tags.map((tag) => (
                <li key={tag.id}>{tag.tag}</li>
              ))}
            </>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
    </>
  );
};

export default ContactsListItem;
