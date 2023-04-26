import React from "react";
import NavbarHome from "../components/NavbarHome.jsx";
import Form from "../components/Form.jsx";

const Home = () => {
  return (
    <>
      <NavbarHome />
      <div className="bg-gray-600 flex flex-col items-center">
        <h1 className="text-white text-3xl font-bold my-4">Create Employee</h1>
        <Form />
      </div>
    </>
  );
};

export default Home;
