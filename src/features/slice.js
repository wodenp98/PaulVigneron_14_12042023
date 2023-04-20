import { createSlice } from "@reduxjs/toolkit";

// récupérer les données du stockage local
const storedEmployees = localStorage.getItem("employees")
  ? JSON.parse(localStorage.getItem("employees"))
  : [];

const initialState = {
  employees: storedEmployees,
};

const employeesSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {
    addEmployee: (state, action) => {
      state.employees.push(action.payload);

      localStorage.setItem("employees", JSON.stringify(state.employees));
    },
    removeEmployee: (state, action) => {
      state.employees = state.employees.filter(
        (employee) => employee.id !== action.payload
      );

      localStorage.setItem("employees", JSON.stringify(state.employees));
    },
  },
});

export const { addEmployee, removeEmployee } = employeesSlice.actions;

export default employeesSlice.reducer;
