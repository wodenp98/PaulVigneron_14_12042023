import { configureStore } from "@reduxjs/toolkit";
import employeesReducer from "../features/slice";

export default configureStore({
  reducer: {
    employees: employeesReducer,
  },
});
