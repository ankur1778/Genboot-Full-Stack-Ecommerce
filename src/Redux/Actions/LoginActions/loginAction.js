import { login } from "../../../api/auth";
import {
  AuthMessages,
  ServerErrorMessage,
} from "../../../utils/statusMessages.js";
import ToastMessage from "../../../utils/ToastMessage.js";
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
} from "../ActionTypes/types.js";
import Cookies from "js-cookie";

export const loginRequest = () => ({
  type: LOGIN_REQUEST,
});

export const loginSuccess = (userData) => ({
  type: LOGIN_SUCCESS,
  payload: userData,
});

export const loginFail = (error) => ({
  type: LOGIN_FAIL,
  payload: error,
});

export const LoginUser = (values) => {
  return async (dispatch) => {
    const payload = {
      email: values.email,
      password: values.password,
    };
    dispatch(loginRequest());
    try {
      const response = await login(payload);
      if (response?.token) {
        Cookies.set("token", response.token);
        dispatch(loginSuccess(response));
        return true;
      } else {
        throw new Error(
          <ToastMessage message={ServerErrorMessage.SERVER_ERROR} />
        );
      }
    } catch (error) {
      dispatch(loginFail(<ToastMessage message={AuthMessages.INVALID} />));
      return false;
    }
  };
};
