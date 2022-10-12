export const Filter = ({ value, onChange }) => {
  return (
    <label>
      Find contacts by name
      <input onChange={onChange} type="text" name="number" value={value} />
    </label>
  );
};
