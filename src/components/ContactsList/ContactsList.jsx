import React from 'react';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from '../../redux/selectors.js';
import ContactsListElement from '../ContactslistElement/ContactsListElement';
import css from './ContactsList.module.css';

const filterContacts = (contacts, filter) => {
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
};

const ContactsList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const filteredContacts = filterContacts(contacts, filter);
  return (
    <div className={css.contactsListBox}>
      <h4>
        You have {contacts.length} contact{contacts.length === 1 ? null : 's'}
      </h4>
      <ul className={css.contactsList}>
        {filteredContacts &&
          filteredContacts.map(contact => (
            <li key={contact.id}>
              <ContactsListElement contact={contact} />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default ContactsList;