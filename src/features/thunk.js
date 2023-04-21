import { createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "../firebase.config";
import { remove, ref, push, get } from "firebase/database";

export const addEmployee = createAsyncThunk(
  "employee/addEmployee",
  async (employeeData) => {
    try {
      const employeeRef = await push(ref(db, "employees"), employeeData);
      const employeeKey = employeeRef.key;
      return { ...employeeData, id: employeeKey };
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
);

export const fetchEmployees = createAsyncThunk(
  "employees/fetchEmployees",
  async () => {
    const employees = [];
    const employeesRef = ref(db, "employees");
    const snapshot = await get(employeesRef);
    snapshot.forEach((childSnapshot) => {
      employees.push({ id: childSnapshot.key, ...childSnapshot.val() });
    });
    return employees;
  }
);

export const deleteEmployee = createAsyncThunk(
  "employees/deleteEmployee",
  async (employeeId) => {
    try {
      console.log(employeeId);
      const employeeRef = db.ref(`employees/${employeeId}`);
      await employeeRef.remove();
      return employeeId;
    } catch (error) {
      console.error("Error deleting employee:", error);
      throw error;
    }
  }
);
