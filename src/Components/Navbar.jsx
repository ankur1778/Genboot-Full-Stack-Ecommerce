import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { togglehamburger } from "../Redux/Actions/HamburgerAction/HamburgerAction";
import logo from "../Images/logo1.png";
import cartLogo from "../Images/cartLogo.png";
import profile from "../Images/profileLogo.svg";

const Navbar = () => {
  const dispatch = useDispatch();
  const ishamburgerOpen = useSelector(
    (state) => state.hamburger.ishamburgerOpen
  );

  const handleToggle = () => {
    dispatch(togglehamburger());
  };

  return (
    <div>
      <nav className="h-20 items-center w-full justify-between flex bg-gray-100 text-black font-semibold font-serif px-6 py-4">
        <Link to="/">
          <div className="flex items-center justify-between">
            <img className="w-36 h-36 mt-8" src={logo} alt="Logo" />
          </div>
        </Link>
        <div
          className={`hamburger-icon sm:hidden ${
            ishamburgerOpen ? "open" : ""
          }`}
          onClick={handleToggle}
        >
          <div className="bar bg-black h-1 w-6 mb-1"></div>
          <div className="bar bg-black h-1 w-6 mb-1"></div>
          <div className="bar bg-black h-1 w-6"></div>
        </div>

        <div className="hidden sm:flex items-center space-x-6">
          <Link
            to="/"
            className="hover:border px-4 py-2 rounded-lg border-slate-300"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="hover:border px-4 py-2 rounded-lg border-slate-300"
          >
            About
          </Link>
          <Link
            to="/cart"
            className="hover:border px-4 py-2 rounded-lg border-slate-300"
          >
            Cart
          </Link>
          <Link
            to="/wishlists"
            className="hover:border px-4 py-2 rounded-lg border-slate-300"
          >
            Wishlist
          </Link>
          <Link
            to="/profile"
            className="hover:border px-4 py-2 rounded-lg border-slate-300"
          >
            <img src={profile} alt="Profile" />
          </Link>
        </div>
        <div className="md:hidden flex items-center">
          <Link to="/cart" className="flex items-center px-4 py-2">
            <img src={cartLogo} alt="Cart" className="w-6 h-6" />
          </Link>
        </div>
      </nav>

      {ishamburgerOpen && (
        <div className="sm:hidden font-semibold font-serif bg-navbarColor flex flex-col text-black space-y-4 p-4">
          <Link
            to="/"
            className="hover:border px-4 py-2 rounded-lg border-slate-300"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="hover:border px-4 py-2 rounded-lg border-slate-300"
          >
            About
          </Link>
          <Link
            to="/cart"
            className="hover:border px-4 py-2 rounded-lg border-slate-300"
          >
            Cart
          </Link>
          <Link
            to="/wishlists"
            className="hover:border px-4 py-2 rounded-lg border-slate-300"
          >
            Cart
          </Link>
          <Link
            to="/profile"
            className="hover:border px-4 py-2 rounded-lg border-slate-300"
          >
            Profile
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
