function Input({ name, type, label, placeholder, onChange, value, onBlur }) {
    return (
      <div className="inputDiv">
        <label>{label}</label>
        <input
          name={name}
          type={type}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          onBlur={onBlur}
        />
      </div>
    );
  }
  
  export default Input;