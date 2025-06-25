import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addContact, selectContacts } from "../../redux/contactSlice";
import styles from "./ContactForm.module.css";

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const nameExists = contacts.some(
      (contact) => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (nameExists) {
      alert(`${name} already exist in contact!`);
      return;
    }

    dispatch(addContact(name, number));
    setName("");
    setNumber("");
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={name}
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
        className={styles.input}
        required
      />
      <input
        type="tel"
        name="number"
        value={number}
        placeholder="Telephone"
        onChange={(e) => setNumber(e.target.value)}
        className={styles.input}
        required
      />
      <button type="submit" className={styles.button}>
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
