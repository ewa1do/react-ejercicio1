import React from 'react';
import PropTypes from 'prop-types';
import contactClass from '../models/contactClass';
import './contact.css';

const ContactComponent = ({ contact }) => {
  return (
    <div className="contact-div">
      <h3>Contact Info:</h3>
      <ul className="contact-list">
        <li>Name: {contact.name}</li>
        <li>LastName: {contact.lastname}</li>
        <li>email: {contact.email}</li>
        <li>
          connected:{' '}
          <span className={contact.connected ? 'online' : 'offline'}>
            Contact {contact.connected ? 'Online' : 'Unavailable'}
          </span>
        </li>
      </ul>
    </div>
  );
};

ContactComponent.propTypes = {
  contact: PropTypes.instanceOf(contactClass),
};

export default ContactComponent;
