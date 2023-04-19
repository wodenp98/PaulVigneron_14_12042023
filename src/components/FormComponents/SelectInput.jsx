import React from "react";

const SelectInput = ({ label, name, options, required, errors, register }) => {
  return (
    <div>
      <label htmlFor={name} className="block font-medium mb-2">
        {label}
      </label>
      <select
        id={name}
        name={name}
        {...register(name, { required })}
        className={`border border-gray-300 p-2 rounded w-full mb-2 ${
          errors[name] ? "border-red-500" : ""
        }`}
      >
        <option value="">-- Select an option --</option>
        {options.map((option) => (
          <option key={`key-${option.name}`} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
      {errors[name] && <p className="text-red-500 mb-2">{label} is required</p>}
    </div>
  );
};

export default SelectInput;
