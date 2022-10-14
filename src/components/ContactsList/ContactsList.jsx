import { List, LIstItem } from './ContactsList.styled';
import { Button } from 'components/ContactsForm/ContactsForm.styled';
export const ContactsList = ({ contacts, onDelete }) => {
  return (
    <div>
      <List>
        {contacts.map(contact => {
          return (
            <LIstItem key={contact.id}>
              {contact.name}: {contact.number}
              <Button type="button" onClick={() => onDelete(contact.id)}>
                Delete
              </Button>
            </LIstItem>
          );
        })}
      </List>
    </div>
  );
};
