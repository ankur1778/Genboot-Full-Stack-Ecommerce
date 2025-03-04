import React from "react";
import logo from "../Images/logo.png";
import { Link } from "react-router-dom";

const AdminNavbar = ({ handleChange }) => {
  const className =
    "px-4 py-2 text-white text-xl cursor-pointer hover:bg-gray-200 hover:text-red-800 hover:scale-110 rounded-lg";
  return (
    <nav className="bg-slate-600 rounded-lg ml-5 h-auto w-64 md:w-56 lg:w-64 font-bold shadow-lg fixed md:relative z-20">
      <div className="flex justify-center my-6">
        <img className="h-16 w-20 mt-10" src={logo} alt="Logo" />
      </div>
      <ul className="space-y-4 text-center">
        <li
          className={className}
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
          className={className}
          onClick={() => handleChange("orderManagement")}
        >
          Order Management
        </li>
        <li>
          <button className={className}>
            <Link to="/logout">Logout</Link>
          </button>
        </li>
        <li className={className}>
          <Link to="/">Visit website</Link>
        </li>
      </ul>
    </nav>
  );
};

export default AdminNavbar;
