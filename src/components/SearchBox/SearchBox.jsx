export const SearchBox = ({ value, onChange }) => {
  return (
    <div className="seachBox">
      Find contacts by name
        <input
          type="text"
          value={value}
          onChange={onChange}
        />
      </div>
  );
};