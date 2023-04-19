import Modal from "@wodenp98/plugin-modal-react";
import { states, departments } from "../data/data";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";

const Form = () => {
  const {
    register,
    handleSubmit,
    // setValue,
    control,
    formState: { errors },
  } = useForm();
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const onSubmit = (data) => {
    console.log(data);
    // setValue()
    setModalIsOpen(true);
  };

  const toggleModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="max-w-lg min-h-screen mx-auto">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-6 rounded-lg shadow-md my-8"
      >
        <label htmlFor="firstName" className="block font-medium mb-2">
          First name
        </label>
        <input
          id="firstName"
          name="firstName"
          type="text"
          placeholder="e.g. Paul"
          {...register("firstName", {
            required: true,
            pattern: /^[A-Za-z]+$/i,
          })}
          className={`border border-gray-300 p-2 rounded w-full mb-2 ${
            errors.firstName ? "border-red-500" : ""
          }`}
        />
        {errors.firstName && (
          <p className="text-red-500 mb-2">
            First name is required and should only contain letters
          </p>
        )}

        <label htmlFor="lastName" className="block font-medium mb-2">
          Last name
        </label>
        <input
          id="lastName"
          name="lastName"
          type="text"
          placeholder="e.g. Vigneron"
          {...register("lastName", { required: true, pattern: /^[A-Za-z]+$/i })}
          className={`border border-gray-300 p-2 rounded w-full mb-2 ${
            errors.lastName ? "border-red-500" : ""
          }`}
        />
        {errors.lastName && (
          <p className="text-red-500 mb-2">
            Last name is required and should only contain letters
          </p>
        )}

        <label htmlFor="birthDate" className="block font-medium mb-2">
          Date of Birth
        </label>
        <Controller
          control={control}
          name="birthDate"
          rules={{ required: true }}
          render={({ field }) => (
            <div>
              <DatePicker
                id="birthDate"
                name="birthDate"
                placeholderText="Select a date"
                onChange={(e) => field.onChange(e)}
                selected={field.value}
                peekNextMonth
                dateFormat="dd/MM/yyyy"
                showMonthDropdown
                showYearDropdown
                dropdownMode="select"
                className={`border border-gray-300 p-2 rounded w-full mb-2 ${
                  errors.birthDate ? "border-red-500" : ""
                }`}
              />
              {errors.birthDate && (
                <p className="text-red-500 mb-2">Date of Birth is required</p>
              )}
            </div>
          )}
        />

        <label htmlFor="startDate" className="block font-medium mb-2">
          Start Date
        </label>
        <Controller
          control={control}
          name="startDate"
          rules={{ required: true }}
          render={({ field }) => (
            <div>
              <DatePicker
                id="startDate"
                name="startDate"
                placeholderText="Select a date"
                onChange={(e) => field.onChange(e)}
                selected={field.value}
                peekNextMonth
                dateFormat="dd/MM/yyyy"
                showMonthDropdown
                showYearDropdown
                dropdownMode="select"
                className={`border border-gray-300 p-2 rounded w-full mb-2 ${
                  errors.startDate ? "border-red-500" : ""
                }`}
              />
              {errors.startDate && (
                <p className="text-red-500 mb-2">Start Date is required</p>
              )}
            </div>
          )}
        />

        <fieldset className="bg-gray-100 border border-gray-300 p-4 rounded">
          <legend className="text-lg font-medium mb-2">Address</legend>

          <label htmlFor="street" className="block font-medium mb-2">
            Street
          </label>
          <input
            id="street"
            name="street"
            type="text"
            placeholder="e.g. 8 rue Marc"
            {...register("street", { required: true })}
            className={`border border-gray-300 p-2 rounded w-full mb-2 ${
              errors.street ? "border-red-500" : ""
            }`}
          />
          {errors.street && (
            <p className="text-red-500 mb-2">Street is required</p>
          )}

          <label htmlFor="city" className="block font-medium mb-2">
            City
          </label>
          <input
            id="city"
            name="city"
            type="text"
            placeholder="e.g. K-Bicetre"
            {...register("city", { required: true })}
            className={`border border-gray-300 p-2 rounded w-full mb-2 ${
              errors.city ? "border-red-500" : ""
            }`}
          />
          {errors.city && <p className="text-red-500 mb-2">City is required</p>}

          <label htmlFor="state" className="block font-medium mb-2">
            State
          </label>
          <select
            id="state"
            name="state"
            {...register("state", { required: true })}
            className={`border border-gray-300 p-2 rounded w-full mb-2 ${
              errors.state ? "border-red-500" : ""
            }`}
          >
            <option value="">-- Select a State --</option>
            {states.map((s) => (
              <option key={`key-${s.name}`} value={s.value}>
                {s.name}
              </option>
            ))}
          </select>
          {errors.state && (
            <p className="text-red-500 mb-2">State is required</p>
          )}

          <label htmlFor="Zip Code" className="block font-medium mb-2">
            ZIP
          </label>
          <input
            id="zipcode"
            name="zipcode"
            type="text"
            placeholder="e.g. 94270"
            {...register("zip", { required: true, pattern: /^[0-9]+$/ })}
            className={`border border-gray-300 p-2 rounded w-full mb-2 ${
              errors.zip ? "border-red-500" : ""
            }`}
          />
          {errors.zip && (
            <p className="text-red-500 mb-2">
              ZIP is required and should only contain digits
            </p>
          )}
        </fieldset>
        <label htmlFor="department" className="block font-medium mb-2">
          Department
        </label>
        <select
          id="department"
          name="department"
          {...register("department", { required: true })}
          className={`border border-gray-300 p-2 rounded w-full mb-2 ${
            errors.department ? "border-red-500" : ""
          }`}
        >
          <option value="">-- Select a Department --</option>
          {departments.map((d) => (
            <option key={`key-${d.name}`} value={d.value}>
              {d.name}
            </option>
          ))}
        </select>
        {errors.department && (
          <p className="text-red-500 mb-2">Department is required</p>
        )}

        <button
          type="submit"
          className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded mt-4"
        >
          Save
        </button>
      </form>

      {modalIsOpen && (
        <Modal toggle={toggleModal}>
          <h1 className="font-bold text-center text-lg">Employee Created!</h1>
        </Modal>
      )}
    </div>
  );
};

export default Form;
