import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactSlice";
import styles from "./Contact.module.css";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <div className={styles.card}>
      <div>
        <p className={styles.name}>{contact.name}</p>
        <p className={styles.number}>{contact.number}</p>
      </div>
      <button onClick={handleDelete} className={styles.button}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
