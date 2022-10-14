import { Input } from 'components/ContactsForm/ContactsForm.styled';
export const Filter = ({ value, onChange }) => {
  return (
    <label style={{}}>
      Find contacts by name
      <Input onChange={onChange} type="text" name="number" value={value} />
    </label>
  );
};
