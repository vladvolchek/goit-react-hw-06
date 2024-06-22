import { FaUserAlt, FaPhone } from 'react-icons/fa';
import css from './Contact.module.css'
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
export const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  return (
    <li className={css.contact}>
      <div className={css.nameContact}>
        <FaUserAlt />{contact.name}
      </div>
      <div className={css.telContact}><FaPhone/>{contact.number}</div>
      <button onClick={() => dispatch(deleteContact(contact.id)) }>Delete</button>
    </li>
  );
};