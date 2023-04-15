import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DateInput = ({
  htmlFor,
  id,
  label,
  name,
  value,
  onChange,
  placeholder,
  dateFormat,
}) => {
  return (
    <label htmlFor={htmlFor} className="block text-gray-700 font-bold mb-2">
      {label}:
      <DatePicker
        id={id}
        name={name}
        selected={value}
        onChange={onChange}
        placeholderText={placeholder}
        dateFormat={dateFormat}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
    </label>
  );
};

export default DateInput;
