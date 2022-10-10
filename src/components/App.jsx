import React, { Component } from 'react';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  addContacts = e => {
    e.preventDefault();
    const value = e.target[0].value;

    this.setState(prevState => ({
      contacts: [...prevState.contacts, value],
    }));
  };
  render() {
    return (
      <>
        <form onSubmit={this.addContacts}>
          <input
            onChange={this.onChange}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <button type="submit">Add contact</button>
        </form>
        <div>
          {this.state.contacts.map((contact, index) => {
            return <p key={index}>{contact}</p>;
          })}
        </div>
      </>
    );
  }
}
