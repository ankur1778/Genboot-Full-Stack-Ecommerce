import React from "react";
import logo from "../Images/logo.png";

const AdminNavbar = ({ handleChange }) => {
  return (
    <nav className="bg-slate-500 h-screen w-64 md:w-56 lg:w-64 font-bold shadow-lg fixed md:relative z-20">
      <div className="flex justify-center my-6">
        <img className="h-16 w-20" src={logo} alt="Logo" />
      </div>
      <ul className="space-y-4 text-center">
        <li
          className="px-4 text-white py-2 text-xl cursor-pointer hover:bg-gray-200 hover:text-red-800 hover:scale-110 rounded-lg"
          onClick={() => handleChange("userManagement")}
        >
          User Management
        </li>
        <li
          className="px-4 py-2 text-white text-xl cursor-pointer hover:bg-gray-200 hover:text-red-800 hover:scale-110 rounded-lg"
          onClick={() => handleChange("productManagement")}
        >
          Product Management
        </li>
        <li
          className="px-4 py-2 text-white text-xl cursor-pointer hover:bg-gray-200 hover:text-red-800 hover:scale-110 rounded-lg"
          onClick={() => handleChange("orderManagement")}
        >
          Order Management
        </li>
        <li className="px-4 py-2 text-white text-xl cursor-pointer hover:bg-gray-200 hover:text-red-800 hover:scale-110 rounded-lg">
          Profile
        </li>
      </ul>
    </nav>
  );
};

export default AdminNavbar;
