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
    <label htmlFor={htmlFor}>
      {label}:
      <DatePicker
        id={id}
        name={name}
        selected={value}
        onChange={onChange}
        placeholderText={placeholder}
        dateFormat={dateFormat}
      />
    </label>
  );
};

export default DateInput;
