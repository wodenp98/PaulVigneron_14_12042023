import { createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "../firebase.config";
import { remove, ref, push, get } from "firebase/database";

export const addEmployee = createAsyncThunk(
  "employees/addEmployee",
  async (employee) => {
    const employeeRef = await push(ref(db, "employees"), employee);
    return { ...employee, id: employeeRef.key };
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
  async (employee) => {
    try {
      const employeeRef = ref(db, `employees/${employee.id}`);
      await remove(employeeRef);
      return employee.id;
    } catch (error) {
      return error;
    }
  }
);
