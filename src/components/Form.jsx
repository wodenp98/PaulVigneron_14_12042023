import Modal from "@wodenp98/plugin-modal-react";
import { states, departments } from "../data/data";
import { useState } from "react";
import { useForm } from "react-hook-form";
import TextInput from "./FormComponents/TextInput";
import DateInput from "./FormComponents/DateInput";
import SelectInput from "./FormComponents/SelectInput";
import { useDispatch } from "react-redux";
import { format } from "date-fns";
import { addEmployee } from "../features/thunk";

const Form = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    const formattedDate = {
      ...data,
      birthDate: format(data.birthDate, "dd-MM-yyyy"),
      startDate: format(data.startDate, "dd-MM-yyyy"),
    };

    console.log(formattedDate);
    dispatch(addEmployee(formattedDate));
    setModalIsOpen(true);
    // clear les champs?
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
        <TextInput
          label="First Name"
          name="firstName"
          placeholder="e.g. Paul"
          register={register}
          required={true}
          pattern={/^[A-Za-z]+$/i}
          errors={errors}
        />

        <TextInput
          label="Last Name"
          name="lastName"
          placeholder="e.g. Vigneron"
          register={register}
          required={true}
          pattern={/^[A-Za-z]+$/i}
          errors={errors}
        />

        <DateInput
          name="birthDate"
          label="Date of Birth"
          control={control}
          errors={errors}
        />

        <DateInput
          name="startDate"
          label="Start Date"
          control={control}
          errors={errors}
        />

        <fieldset className="bg-gray-100 border border-gray-300 p-4 rounded">
          <legend className="text-lg font-medium mb-2">Address</legend>

          <TextInput
            label="Street"
            name="street"
            placeholder="e.g. 8 rue Marc"
            register={register}
            required={true}
            errors={errors}
          />

          <TextInput
            label="City"
            name="city"
            placeholder="e.g. K-Bicetre"
            register={register}
            required={true}
            errors={errors}
          />

          <SelectInput
            label="State"
            name="state"
            options={states}
            required={true}
            errors={errors}
            register={register}
          />

          <TextInput
            label="Zip Code"
            name="zipcode"
            placeholder="e.g. 94270"
            register={register}
            required={true}
            errors={errors}
          />
        </fieldset>

        <SelectInput
          label="Department"
          name="department"
          options={departments}
          required={true}
          errors={errors}
          register={register}
        />

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
