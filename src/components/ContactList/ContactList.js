import React from 'react';
import css from './contact.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'store/contactsSlice';

const ContactList = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(state => {
    return state.contacts.items.filter(item =>
      item.name.toLowerCase().trim().includes(state.filter.toLowerCase().trim())
    );
  });

  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li className={css.contactsItem} key={id}>
          {name} : {number}
          <button
            className={css.btnBlockItem}
            type="submit"
            onClick={() => dispatch(deleteContact(id))}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
