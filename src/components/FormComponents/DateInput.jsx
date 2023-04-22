import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Controller } from "react-hook-form";
import { format, parse } from "date-fns";

const DateInput = ({ name, label, control, errors }) => {
  return (
    <>
      <label htmlFor={name} className="block font-medium mb-2">
        {label}
      </label>
      <Controller
        control={control}
        name={name}
        rules={{ required: true }}
        render={({ field }) => (
          <div>
            <DatePicker
              id={name}
              name={name}
              placeholderText="Select a date"
              onChange={(date) => field.onChange(format(date, "dd/MM/yyyy"))}
              selected={
                field.value
                  ? parse(field.value, "dd/MM/yyyy", new Date())
                  : null
              }
              peekNextMonth
              dateFormat="dd/MM/yyyy"
              showMonthDropdown
              showYearDropdown
              dropdownMode="select"
              className={`border border-gray-300 p-2 rounded w-full mb-2 ${
                errors[name] ? "border-red-500" : ""
              }`}
            />
            {errors[name] && <p className="text-red-500 mb-2">{label}</p>}
          </div>
        )}
      />
    </>
  );
};

export default DateInput;
