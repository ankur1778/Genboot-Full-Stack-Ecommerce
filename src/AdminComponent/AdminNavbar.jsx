import React from "react";
import logo from "../Images/logo.png";

const AdminNavbar = ({ handleChange }) => {
  return (
    <nav className="bg-white h-screen w-64 md:w-56 lg:w-64 font-bold shadow-md fixed md:relative z-20">
      <div className="flex justify-center my-6">
        <img className="h-16 w-20" src={logo} alt="Logo" />
      </div>
      <ul className="space-y-4 text-center">
        <li
          className="px-4 py-2 text-lg cursor-pointer hover:bg-gray-200 hover:text-red-800 rounded-lg font-serif"
          onClick={() => handleChange("userManagement")}
        >
          User Management
        </li>
        <li
          className="px-4 py-2 text-lg cursor-pointer hover:bg-gray-200 hover:text-red-800 rounded-lg font-serif"
          onClick={() => handleChange("productManagement")}
        >
          Product Management
        </li>
        <li
          className="px-4 py-2 text-lg cursor-pointer hover:bg-gray-200 hover:text-red-800 rounded-lg font-serif"
          onClick={() => handleChange("orderManagement")}
        >
          Order Management
        </li>
        <li className="px-4 py-2 text-lg cursor-pointer hover:bg-gray-200 hover:text-red-800 rounded-lg font-serif">
          Profile
        </li>
      </ul>
    </nav>
  );
};

export default AdminNavbar;
