import { login } from "../../../api/auth";
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL } from "./loginactionType";
import Cookies from "js-cookie";
export const loginRequest = () => ({
  type: LOGIN_REQUEST,
});

export const loginSuccess = (userData) => ({
  type: LOGIN_SUCCESS,
  payload: {userData},
});

export const loginFail = (error) => ({
  type: LOGIN_FAIL,
  payload: error,
});

export const LoginUser = (values) => {
  return async (dispatch) => {
    const payload={
      email:values.email,
      password:values.password
    }
    dispatch(loginRequest());
    try {
      const response = await login(payload);
      
      dispatch(loginSuccess());
      if (response) {
        Cookies.set("token", response.token);
        Cookies.set("Role", response.roleId);
      }
      return true;
    } catch (error) {
      dispatch(loginFail());
      console.log(error, "errors");
      return false;
    }
  };
};
