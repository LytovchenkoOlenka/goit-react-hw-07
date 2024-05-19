import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
import Error from "../Error/Error";
import Loader from "../Loader/Loader";

import css from "./App.module.css";

import { fetchContacts } from "../../redux/contactsOps";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { selectLoading, selectError } from "../../redux/selectors";

export default function App() {
  const dispatch = useDispatch();

  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {loading && <Loader />}
      {error && <Error />}
      <ContactList />
    </div>
  );
}
