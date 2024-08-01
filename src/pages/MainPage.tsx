import { useEffect } from "react";
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
      <ContactsList />
    </>
  );
};

export default MainPage;
