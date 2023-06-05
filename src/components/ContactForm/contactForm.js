import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../store/contactsSlice';

import css from './contactForm.module.css';


const ContactForm = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(state => state.contacts.items)

  const handleSubmit = event => {
    event.preventDefault();
    const newContact = {
      id: nanoid(),
      name: event.target.elements.name.value,
      number: event.target.elements.number.value,
    };

    if (
      contacts.find(
        contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
      )
    ) {
      return alert(`${newContact.name} is already in contacts`);
    }
    if (contacts.find(contact => contact.number === newContact.number)) {
      return alert(`${newContact.number} is already in contacts`);
    }

    dispatch(addContact(newContact));
    event.target.reset();
  };

  return (
    <form className={css.formGroup} onSubmit={handleSubmit}>
      <label className={css.formField}>
        Name
        <input
          className={css.formFieldInput}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className={css.formField}>
        Number
        <input
          className={css.formFieldInput}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button className={css.btnBlockItem} type="submit">
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
