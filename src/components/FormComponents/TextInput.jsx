import React from "react";

const TextInput = ({
  label,
  name,
  placeholder,
  register,
  required,
  pattern,
  errors,
}) => {
  return (
    <>
      <label htmlFor={name} className="block font-medium mb-2">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type="text"
        placeholder={placeholder}
        {...register(name, { required, pattern })}
        className={`border border-gray-300 p-2 rounded w-full mb-2 ${
          errors[name] ? "border-red-500" : ""
        }`}
      />
      {errors[name] && (
        <p className="text-red-500 mb-2">
          {name === "firstName" || name === "lastName"
            ? `${label} is required and should only contain letters`
            : `${label} is required`}
        </p>
      )}
    </>
  );
};

export default TextInput;
