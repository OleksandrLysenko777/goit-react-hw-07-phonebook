import React from 'react';
import css from './ContactsListElement.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import PropTypes from 'prop-types';

const ContactsListElement = ({ contact }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <div className={css.contactLi}>
      <span className={css.contact}>{contact.name}:</span>
      <span className={css.contact}>{contact.number}</span>
      <button type="button" className={css.btnDelete} onClick={handleClick}>
        Delete
      </button>
    </div>
  );
};

ContactsListElement.propTypes = {
  contact: PropTypes.object,
};

export default ContactsListElement;