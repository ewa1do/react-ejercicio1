class Contact {
  name = '';
  lastname = '';
  email = '';
  connected = false;

  constructor(name, lastname, email, connected) {
    this.name = name;
    this.lastname = lastname;
    this.email = email;
    this.connected = connected;
  }
}

export default Contact;
