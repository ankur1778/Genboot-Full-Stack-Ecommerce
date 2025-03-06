import React from "react";
import logo from "../Images/logo.png";
import { Link } from "react-router-dom";

const AdminNavbar = ({ handleChange }) => {
  const navClass =
    "px-4 py-2 text-white text-xl cursor-pointer hover:bg-gray-200 hover:text-red-800 hover:scale-110 rounded-lg";
  const navArray = [
    { id: 1, value: "User Management", function: "userManagement" },
    { id: 2, value: "Product Management", function: "productManagement" },
    { id: 3, value: "Order Management", function: "orderManagement" },
  ];
  return (
    <nav className="bg-slate-600 rounded-lg ml-5 h-auto w-64 md:w-56 lg:w-64 font-bold shadow-lg fixed md:relative z-20">
      <div className="flex justify-center my-6">
        <img className="h-16 w-20 mt-10" src={logo} alt="Logo" />
      </div>
      <ul className="space-y-4 text-center">
        {navArray.map((el) => {
          return (
            <li
              key={el.id}
              className={navClass}
              onClick={() => handleChange(el.function)}
            >
              {el.value}
            </li>
          );
        })}
        <li>
          <button className={navClass}>
            <Link to="/logout">Logout</Link>
          </button>
        </li>
        <li className={navClass}>
          <Link to="/">Visit website</Link>
        </li>
      </ul>
    </nav>
  );
};

export default AdminNavbar;



