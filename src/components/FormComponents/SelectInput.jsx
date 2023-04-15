import React from "react";

const SelectInput = ({
  htmlFor,
  id,
  label,
  name,
  value,
  options,
  onChange,
}) => {
  return (
    <label htmlFor={htmlFor} className="block text-gray-700 font-bold mb-2">
      {label}:
      <select
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      >
        {options.map((option) => (
          <option key={`key-${option.name}`} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
    </label>
  );
};

export default SelectInput;
