import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { Filter } from './Filter/Filter';
import { ContactsList } from './ContactsList/ContactsList';
import { ContactsForm } from './ContactsForm/ContactsForm';
export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],

    filter: '',
  };

  addContacts = (name, number) => {
    const checkName = this.state.contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (checkName) {
      alert(`${name} is allready in contacts`);
      return;
    }
    const contact = {
      id: nanoid(4),
      name,
      number,
    };
    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };

  deleteContacts = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  onChangeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  onFilteredContacts = () => {
    const { filter, contacts } = this.state;
    const filtered = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filtered)
    );
  };

  render() {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <h1>Phonebook</h1>
        <ContactsForm onSubmit={this.addContacts}></ContactsForm>
        <Filter value={this.state.filter} onChange={this.onChangeFilter} />

        {this.state.contacts.length !== 0 && (
          <>
            <h2>Contacts</h2>
            <ContactsList
              onDelete={this.deleteContacts}
              contacts={this.onFilteredContacts()}
            ></ContactsList>
          </>
        )}
      </div>
    );
  }
}
