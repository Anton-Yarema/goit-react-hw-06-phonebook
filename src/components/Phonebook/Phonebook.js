import { useSelector } from 'react-redux';
import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';
import css from './Phonebook.module.css';

const Phonebook = () => {


   const contacts = useSelector(state => state.contacts.items);

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      {contacts.length > 1 && <Filter />} 
      {contacts.length > 0 ? ( <ContactList/>): (<p>Your phonebook is empty.</p>)}
    </div>
  );
};

export default Phonebook;
