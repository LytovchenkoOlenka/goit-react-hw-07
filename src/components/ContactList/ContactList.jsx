import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";
import { selectFiltredContacts } from "../../redux/selectors";

export default function ContactList() {
  const filtredContacts = useSelector(selectFiltredContacts);

  return (
    <ul className={css.list}>
      {filtredContacts.length !== 0 ? (
        filtredContacts.map((contact) => (
          <li className={css.item} key={contact.id}>
            <Contact data={contact} />
          </li>
        ))
      ) : (
        <p>No contacts found</p>
      )}
    </ul>
  );
}
