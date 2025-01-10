// import axios from 'axios'
import Cookies from "js-cookie";

import {
  SHOW_USER_FAILURE,
  SHOW_USER_REQUEST,
  SHOW_USER_SUCCESS,
} from "./userActionType";

export const getUsersRequest = () => ({
  type: SHOW_USER_REQUEST,
});

export const getUsersSuccess = (users) => ({
  type: SHOW_USER_SUCCESS,
  payload: users,
});

export const getUsersFailure = (error) => ({
  type: SHOW_USER_FAILURE,
  payload: error,
});

export const UserAction = () => {
  const token = Cookies.get("token");
  console.log(token);
  return async (dispatch) => {
    dispatch(getUsersRequest());
    try {
      const res = await fetch(
        "https://e105-2401-4900-1c2b-900f-f406-5093-1f86-fda5.ngrok-free.app/admin/users",
        {
          method: "GET",
          headers: {
            "content-Type": "application/json",
            'Authorization': token,
            'roleId' : '1'
          } ,
        }
      );
      // if (!res.ok) {
      //   throw new Error(`Error: ${res.status} - ${res.statusText}`);
      // }
      console.log(res);
      // Parse the JSON data
      const data = await res.json();
      console.log(data, "kgugui");

      dispatch(getUsersSuccess(data));
      console.log(data, "skbsjdjhkj"); // Log data for debugging
      return true;
    } catch (error) {
      dispatch(getUsersFailure(error.message)); // Pass the error message to the action
      return false;
    }
  };
};
