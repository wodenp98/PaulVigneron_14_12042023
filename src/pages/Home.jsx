import React from "react";
import NavbarHome from "../components/NavbarHome";
import Form from "../components/Form";

const Home = () => {
  return (
    <>
      <NavbarHome />
      <div className="flex flex-col items-center">
        <h1>Create Employee</h1>
        <Form />
      </div>
    </>
  );
};

export default Home;
