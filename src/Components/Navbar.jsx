import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { togglehamburger } from '../Redux/Actions/HamburgerAction/HamburgerAction';
import logo from '../Images/logo1.png';
import image from '../Images/logoProfile.png';
import cartLogo from '../Images/cartLogo.png'

const Navbar = () => {
  const dispatch = useDispatch();
  const ishamburgerOpen = useSelector(state => state.hamburger.ishamburgerOpen);

  const handleToggle = () => {
    dispatch(togglehamburger());
  };

  return (
    <div>
      <nav className="h-20 items-center w-full justify-between flex bg-gray-100 text-white">
        <Link to="/">
          <div className="flex items-center justify-between p-4">
            <img
              className="w-36 h-36 mt-7"
              src={logo}
              alt="Logo"
            /> 
            {/* <h1 className='text-2xl font-mono'>Flamino</h1> */}
          </div>
        </Link>
        
        <div
          className={`hamburger-icon ${ishamburgerOpen ? 'open' : ''} sm:hidden`}
          onClick={handleToggle}
        >
          <div className="bar bg-white h-1 w-6 mb-1"></div>
          <div className="bar bg-white h-1 w-6 mb-1"></div>
          <div className="bar bg-white h-1 w-6"></div>
        </div>

        <div className={`items sm:flex ${ishamburgerOpen ? 'block' : 'hidden'} sm:block`}>
          <ul className="grid py-2 px-4">
            <Link className="text-black text-xl font-semibold font-serif" to="/">Home</Link>
          </ul>
          <ul className="inline-block py-2 px-4">
            <Link className="text-black text-xl font-semibold font-serif" to="/about">About</Link>
          </ul>
          <ul className="inline-block py-2 px-4 mb-3">
            <Link to="/profile">
              <img
                className="h-8 w-10 rounded-full"
                src={image}
                alt="Profile"
              />
            </Link>
          </ul>
          <ul className="inline-block py-2 px-4 mb-3">
            <Link to="/cart">
              <img
                className="h-8 w-10 rounded-full"
                src={cartLogo}
                alt="Profile"
              />
            </Link>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

