import { FaUserAlt, FaPhone } from 'react-icons/fa';
import css from './Contact.module.css'
export const Contact = ({ contact, onDeleteContact }) => {
  return (
    <li className={css.contact}>
      <div className={css.nameContact}>
        <FaUserAlt />{contact.name}
      </div>
      <div className={css.telContact}><FaPhone/>{contact.number}</div>
      <button onClick={() => onDeleteContact(contact.id)}>Delete</button>
    </li>
  );
};