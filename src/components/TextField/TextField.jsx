import React from "react";

const TextField = ({
  label,
  type = "text",
  value,
  handleChange,
  helperText,
  name,
  placeHolder,
  error,
  errorText,
}) => {
  return (
    <div className="textField">
      <label>{label}</label>
      <input
        type={type}
        value={value}
        onChange={handleChange}
        name={name}
        placeholder={placeHolder}
        className={`${error ? "error" : null}`}
      />
      <p>{helperText}</p>
      {errorText && <p className="error-text">{errorText}</p>}
    </div>
  );
};

export default TextField;
