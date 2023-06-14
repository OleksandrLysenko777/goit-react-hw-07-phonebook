import React from 'react';
import { useSelector } from 'react-redux';
import {
  selectFilteredContacts,
  selectIsLoading,
} from '../../redux/selectors.js';
import ContactsListElement from '../ContactslistElement/ContactsListElement';
import css from './ContactsList.module.css';

const ContactsList = () => {
  const items = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectIsLoading);

  return (
    <div className={css.contactsListBox}>
      <h4>
        You have {items.length} contact{items.length === 1 ? null : 's'}
      </h4>
      <ul className={css.contactsList}>
        {!!isLoading && <b>Loading contacts...</b>}
        {!!items &&
          items.map(contact => (
            <li key={contact.id}>
              <ContactsListElement contact={contact} />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default ContactsList;