import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { Filter } from './Filter/Filter';
import { ContactsList } from './ContactsList/ContactsList';
import { ContactsForm } from './ContactsForm/ContactsForm';

const LS_KEY = 'contacts';

export function App() {
  const lsContacts = JSON.parse(localStorage.getItem(LS_KEY));
  const [contacts, setContacts] = useState(() => {
    return lsContacts ?? [];
  });

  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem(LS_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const addContacts = (name, number) => {
    const checkName = contacts.find(
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
    setContacts(prevState => [contact, ...prevState]);
  };

  const deleteContacts = contactId => {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== contactId)
    );
  };

  const onChangeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const onFilteredContacts = () => {
    const filtered = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filtered)
    );
  };

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
      <ContactsForm onSubmit={addContacts}></ContactsForm>
      <Filter value={filter} onChange={onChangeFilter} />

      {contacts.length !== 0 && (
        <>
          <h2>Contacts</h2>
          <ContactsList
            onDelete={deleteContacts}
            contacts={onFilteredContacts()}
          ></ContactsList>
        </>
      )}
    </div>
  );
}
