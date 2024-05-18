import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";

export default function ContactList() {
  const contacts = useSelector((state) => state.contacts.items);
  const searchQuery = useSelector((state) => state.filters.name);

  const filtredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
