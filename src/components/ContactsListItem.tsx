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
  Typography,
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
  const [isError, setIsError] = useState(false);

  const handleShowDeleteDialog = () => {
    setIsDeleteDialogShown(true);
  };

  const handleCloseDeleteDialog = () => {
    setIsDeleteDialogShown(false);
    setIsError(false);
  };

  const dispatch = useAppDispatch();

  const handleDeleteDialolg = () => {
    setIsError(false);
    setIsDeleteSending(true);
    apiService
      .deleteContact(contact.id)
      .then(() => {
        setIsDeleteDialogShown(false);
        dispatch(contactsActions.loadContacts());
      })
      .catch(() => {
        setIsError(true);
      })
      .finally(() => {
        setIsDeleteSending(false);
      });
  };

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
            {isError && (
              <>
                <br />
                <b>
                  An error occurred while deleting the contact. Please try again
                  or refresh the page.
                </b>
              </>
            )}
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
            src={contact.avatar_url}
          />
        </ListItemAvatar>
        <ListItemText
          disableTypography
          primary={
            <Typography>
              <b>
                {contact.fields["first name"]
                  ? contact.fields["first name"][0].value
                  : ""}{" "}
                {contact.fields["last name"]
                  ? contact.fields["last name"][0].value
                  : ""}
              </b>
            </Typography>
          }
          secondary={
            <div>
              <Typography>
                <em>
                  {contact.fields["email"] && contact.fields["email"][0].value}{" "}
                </em>
              </Typography>
              <ul>
                {contact.tags.map((tag) => (
                  <li key={tag.id}>{tag.tag}</li>
                ))}
              </ul>
            </div>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
    </>
  );
};

export default ContactsListItem;
