import React from "react";
import { Link } from "react-router-dom";

const NavbarEmployee = () => {
  return (
    <nav className="bg-gray-800 p-4 flex items-center justify-between">
      <div className="text-white font-bold text-xl cursor-default">HRnet</div>
      <Link
        to="/"
        className="bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Home
      </Link>
    </nav>
  );
};

export default NavbarEmployee;
