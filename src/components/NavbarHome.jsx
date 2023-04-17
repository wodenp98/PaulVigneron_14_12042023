import React from "react";
import { Link } from "react-router-dom";

const NavbarHome = () => {
  return (
    <nav className="bg-gray-800 p-4 flex items-center justify-between">
      <div className="text-white font-bold text-xl cursor-default">HRnet</div>
      <Link
        to="/employee"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        View
      </Link>
    </nav>
  );
};

export default NavbarHome;
