const FormRowSelect = ({ name, value, handleChange, labelText, list }) => {
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {labelText || name}
      </label>
      <select
        name={name}
        id={name}
        value={value}
        onChange={handleChange}
        className="form-select"
      >
        {list.map((itemValue, index) => (
          <option value={itemValue} key={index}>
            {itemValue}
          </option>
        ))}
      </select>
    </div>
  );
};
export default FormRowSelect;
