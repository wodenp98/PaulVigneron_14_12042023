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
    <label htmlFor={htmlFor}>
      {label}:
      <select id={id} name={name} value={value} onChange={onChange}>
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
