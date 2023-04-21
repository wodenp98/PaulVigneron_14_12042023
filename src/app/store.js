import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import employeesReducer from "../features/slice";
import thunkMiddleware from "redux-thunk";

const store = configureStore({
  reducer: {
    employees: employeesReducer,
  },
  middleware: [...getDefaultMiddleware(), thunkMiddleware],
});

export default store;
