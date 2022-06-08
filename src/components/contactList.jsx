import React from 'react';
import contactClass from '../models/contactClass';
import ContactComponent from './contact';

const ContactListComponent = () => {
  const defaultContact = new contactClass(
    'Eduardo',
    'Vera',
    'eduardo@vera.com',
    true
  );

  return <ContactComponent contact={defaultContact} />;
};

export default ContactListComponent;
