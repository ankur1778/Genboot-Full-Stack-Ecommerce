import axios from "axios";
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
  const roleId = Cookies.get("roleId");
  return async (dispatch) => {
    dispatch(getUsersRequest());
    try {
      if (!token || !roleId) {
        throw new Error("Token or roleId is missing");
      }
      if (roleId !== "1") {
        throw new Error("You are not allowed");
      }
 
      const res = await axios.get("http://localhost:3100/admin/users", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
          roleId,
        },
      });
 
      const data = res.data;
      dispatch(getUsersSuccess(data));
      return true;
    } catch (error) {
      console.error("Error fetching users:", error.message);
      dispatch(getUsersFailure(error.message));
      return false;
    }
  };
};
 