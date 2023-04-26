import React from "react";
import NavbarEmployee from "../components/NavbarEmployee.jsx";
import Table from "../components/Table.jsx";

const Employee = () => {
  return (
    <>
      <NavbarEmployee />
      <div className="bg-gray-600 flex flex-col items-center h-screen">
        <h1 className="text-white text-3xl font-bold my-4">Current Employee</h1>
        <Table />
      </div>
    </>
  );
};

export default Employee;
