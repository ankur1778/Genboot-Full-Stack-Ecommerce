import React, { useEffect } from 'react';
import Navbar from '../Components/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { jwtdecode } from '../utils/jwt_decode';
import { getUserDetail } from '../Redux/Actions/ProfileAction/ProfileAction';
import MotionPath from '../Components/loader';

const ProfilePage = () => {
  const dispatch = useDispatch();
  const { loading, user, error } = useSelector((state) => state.getUsersDetail);

  useEffect(() => {
    const decodedToken = jwtdecode();
    if (decodedToken) {
      const userId = decodedToken.userId;
      dispatch(getUserDetail(userId)); 
    }
  }, [dispatch]);

  if (loading) {
    return <div>
      <MotionPath/>
    </div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!user) {
    return <div>No user data available</div>;
  }

  return (
    <>
      <Navbar />
      <div className="h-full mt-2 bg-[#DCA47C] min-h-screen flex items-center justify-center p-4">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl max-w-4xl w-full p-8 transition-all duration-300 animate-fade-in">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/3 text-center mb-8 md:mb-0">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSLU5_eUUGBfxfxRd4IquPiEwLbt4E_6RYMw&s"
                alt="Profile"
                className="rounded-full mt-5 w-48 h-48 mx-auto mb-4 border-4 border-[#DCA47C] dark:border-[#DCA47C] transition-transform duration-300 hover:scale-105"
              />
              <button className="mt-4 font-serif font-bold bg-[#DCA47C] text-white px-4 py-2 rounded-lg hover:bg-[#d0793a] transition-colors duration-300">
                Edit Profile
              </button>
            </div>
            <div className="md:w-2/3 md:pl-8">
              <h3 className="py-4 text-5xl text-center text-gray-800 dark:text-white font-serif font-bold">Profile Page</h3>
              <form className="px-8 pt-6 pb-8 mb-4 bg-white dark:bg-gray-800 rounded">
                <div className="mb-4 md:flex md:justify-between">
                  <div className="mb-4 md:mr-2 md:mb-0">
                    <label className="block mb-2 font-serif text-lg font-bold text-gray-700 dark:text-white">
                      First Name
                    </label>
                    <input
                      className="w-full px-3 py-2 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="firstName"
                      type="text"
                      placeholder="First Name"
                      value={user.name || ''}
                    />
                  </div>
                  <div className="md:ml-2">
                    <label className="block mb-2 text-lg font-serif font-bold text-gray-700 dark:text-white">
                      Last Name
                    </label>
                    <input
                      className="w-full px-3 py-2 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="lastName"
                      type="text"
                      placeholder="Last Name"
                      value={user.name || ''}
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label className="block mb-2 text-lg font-serif font-bold text-gray-700 dark:text-white">
                    Email
                  </label>
                  <input
                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="email"
                    type="email"
                    placeholder="Email"
                    value={user.email || ''}
                  />
                </div>

                <div className="mb-4 md:flex md:justify-between">
                  <div className="mb-4 md:mr-2 md:mb-0">
                    <label className="block mb-2 text-lg font-serif font-bold text-gray-700 dark:text-white">
                      Password
                    </label>
                    <input
                      className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      type="text"
                      placeholder="Password"
                      value={user.password || ''}
                    />
                  </div>
                  <div className="md:ml-2">
                    <label className="block mb-2 text-lg font-serif font-bold text-gray-700 dark:text-white">
                      Phone Number
                    </label>
                    <input
                      className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      type="text"
                      placeholder="Phone Number"
                      value={user.phNo || ''}
                    />
                  </div>
                </div>
                <div className="mb-6 text-center">
                  <button
                    className="w-full px-4 py-2 font-serif text-2xl font-bold text-white bg-[#DCA47C] rounded-full hover:bg-[#a56334] dark:bg-[#da8d55] dark:text-white dark:hover:bg-blue-900 focus:outline-none focus:shadow-outline"
                    type="button"
                  >
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
