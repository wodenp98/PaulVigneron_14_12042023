import React, { useState } from "react";
import NavbarHome from "../components/NavbarHome";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const options = [
  { value: "sales", label: "Sales" },
  { value: "marketing", label: "Marketing" },
  { value: "engineering", label: "Engineering" },
  { value: "human_resources", label: "Human Resources" },
  { value: "legal", label: "Legal" },
];

const Home = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <>
      <NavbarHome />
      <div>
        <h1>Create Employee</h1>
        <div>
          <form>
            <label for="first-name">First Name</label>
            <input type="text" id="first-name" />
            <label for="last-name">Last Name</label>
            <input type="text" id="last-name" />
            <label>Date of Birth</label>
            <DatePicker
              selected={new Date()}
              // onChange={(date) => setSelectedDate(date)}
              dateFormat="dd/MM/yyyy"
            />

            <label>Start Date</label>
            <DatePicker
              selected={new Date()}
              // onChange={(date) => setSelectedDate(date)}
              dateFormat="dd/MM/yyyy"
            />
            <fieldset class="address">
              <legend>Address</legend>

              <label for="street">Street</label>
              <input id="street" type="text" />

              <label for="city">City</label>
              <input id="city" type="text" />

              <label for="state">State</label>
              <select name="state" id="state"></select>

              <label for="zip-code">Zip Code</label>
              <input id="zip-code" type="number" />
            </fieldset>
            <label for="department">Department</label>
            <select
              value={selectedOption}
              onChange={(event) => setSelectedOption(event.target.value)}
            >
              {options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </form>
        </div>
      </div>
    </>
  );
};

export default Home;
