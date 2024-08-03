import { Grid } from "@mui/material";
import { useEffect } from "react";
import ContactForm from "../components/ContactForm";
import ContactsList from "../components/ContactsList";
import { contactsActions } from "../redux/slices/contactsSlice";
import { useAppDispatch } from "../redux/store";

const MainPage = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(contactsActions.loadContacts());
  }, []);
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} md={3}>
          <ContactForm />
        </Grid>
        <Grid item xs={12} md={9}>
          <ContactsList />
        </Grid>
      </Grid>
    </>
  );
};

export default MainPage;
