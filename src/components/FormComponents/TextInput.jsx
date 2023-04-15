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
    <label htmlFor={htmlFor} className="block text-gray-700 font-bold mb-2">
      {label}
      <input
        id={id}
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
    </label>
  );
};

export default TextInput;
