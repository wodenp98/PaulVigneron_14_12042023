import React, { useState } from "react";
import Modal from "@wodenp98/plugin-modal-react";
import { states, departments } from "../data/data";
import TextInput from "./FormComponents/TextInput";
import DateInput from "./FormComponents/DateInput";
import SelectInput from "./FormComponents/SelectInput";

const Form = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [formValues, setFormValues] = useState({
    firstname: "",
    lastname: "",
    birthDate: "",
    startDate: "",
    street: "",
    city: "",
    zipcode: "",
    state: "",
    departments: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const handleDateChange = (date, name) => {
    setFormValues((prevValues) => ({ ...prevValues, [name]: date }));
  };

  const handleSelectChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const handleSave = () => {
    const isFormValid = Object.values(formValues).every((value) =>
      Boolean(value.trim())
    );
    if (isFormValid) {
      setModalIsOpen(true);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleSave();
  };

  const toggleModal = () => {
    setModalIsOpen(!modalIsOpen);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TextInput
          htmlFor="firstName"
          id="firstName"
          label="First name"
          name="firstname"
          placeholder="e.g. Paul"
          value={formValues.firstname}
          onChange={handleChange}
        />
        <br />
        <TextInput
          htmlFor="lastName"
          id="lastName"
          label="Last name"
          name="lastname"
          placeholder="e.g. Vigneron"
          value={formValues.lastname}
          onChange={handleChange}
        />
        <br />
        <DateInput
          htmlFor="birthDate"
          id="birthDate"
          label="Date of Birth"
          name="birthDate"
          placeholder="e.g. 14/04/2023"
          value={formValues.birthDate}
          onChange={(date) => handleDateChange(date, "birthDate")}
          dateFormat="dd/MM/yyyy"
        />
        <br />
        <DateInput
          htmlFor="startDate"
          id="startDate"
          label="Start Date"
          name="startDate"
          placeholder="e.g. 14/04/2023"
          value={formValues.startDate}
          onChange={(date) => handleDateChange(date, "startDate")}
          dateFormat="dd/MM/yyyy"
        />
        <br />
        <fieldset>
          <legend>Address</legend>
          <TextInput
            htmlFor="street"
            id="street"
            label="Street"
            name="street"
            placeholder="e.g. rue Marc Sangnier"
            value={formValues.street}
            onChange={handleChange}
          />
          <br />
          <TextInput
            htmlFor="city"
            id="city"
            label="City"
            name="city"
            placeholder="e.g K-Bicetre"
            value={formValues.city}
            onChange={handleChange}
          />
          <br />
          <SelectInput
            htmlFor="state"
            id="state"
            label="State"
            name="state"
            value={formValues.state}
            options={states}
            onChange={handleSelectChange}
          />
          <br />
          <TextInput
            htmlFor="zipcode"
            id="zipcode"
            label="Zip Code"
            name="zipcode"
            placeholder="e.g. 94270"
            value={formValues.zipcode}
            onChange={handleChange}
          />
          <br />
        </fieldset>
        <SelectInput
          htmlFor="departments"
          id="departments"
          label="Departments"
          name="departments"
          value={formValues.departments}
          options={departments}
          onChange={handleSelectChange}
        />
        <button type="submit">Save</button>

        {modalIsOpen && (
          <Modal toggle={toggleModal}>
            <h1>Employee Created!</h1>
          </Modal>
        )}
      </form>
    </div>
  );
};

export default Form;
