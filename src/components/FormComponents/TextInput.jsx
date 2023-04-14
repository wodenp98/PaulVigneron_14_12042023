import React from "react";

const TextInput = ({
  htmlFor,
  id,
  label,
  name,
  value,
  onChange,
  placeholder,
}) => {
  return (
    <label htmlFor={htmlFor}>
      {label}
      <input
        id={id}
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </label>
  );
};

export default TextInput;
