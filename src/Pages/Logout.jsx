import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import logo from "../Images/logo.png";
import BtnLoader from "../utils/btnLoader";

const LOGOUT = "LOGOUT";
const logout = () => {
  return (dispatch) => {
    Cookies.remove("token");
    dispatch({ type: LOGOUT });
  };
};

const initialState = {
  userData: null,
  loggedIn: !!Cookies.get("token"),
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGOUT:
      return {
        ...state,
        userData: null,
        loggedIn: false,
      };
    default:
      return state;
  }
};

const Logout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(logout());
    setTimeout(() => {
      navigate("/login");
    }, 2000);
  }, [dispatch, navigate]);

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-gradient-to-r from-green-200 via-gray-100 to-blue-200">
      <div className="bg-gradient-to-r from-gray-100 to-gray-300 rounded-2xl flex max-w-3xl p-5 items-center shadow-lg">
        <div className="min-h-[140px] w-full place-items-center overflow-x-scroll rounded-lg p-6 lg:overflow-visible">
          <div>
            <img src={logo} alt="" className="w-40 h-40" />
          </div>
          <div className="mt-4 font-semibold text-2xl border-b-2 border-slate-500">
            <div class="grid min-h-[140px] w-full place-items-center overflow-x-scroll rounded-lg p-6 lg:overflow-visible">
              <BtnLoader msg="Logging Out ... " />
            </div>
          </div>
          <h1 className="font-serif m-4 text-2xl">You have been logged out</h1>
          <p className="font-serif m-2 text-xl">Thank You</p>
        </div>{" "}
        <div></div>
      </div>
    </div>
  );
};

export default Logout;
