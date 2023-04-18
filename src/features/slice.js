import { createSlice } from "@reduxjs/toolkit";

const employeesSlice = createSlice({
  name: "employees",
  initialState: {
    data: [],
  },
  reducers: {
    addEmployee: (state, action) => {
      state.data.push(action.payload);
    },
    removeEmployee: (state, action) => {
      state.data = state.data.filter(
        (employee) => employee.id !== action.payload
      );
    },
  },
});

export const { addEmployee, removeEmployee } = employeesSlice.actions;

export default employeesSlice.reducer;
