import { registration } from "../../../api/auth";
import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
} from "../ActionTypes/types.js";

export const RegisterRequest = () => ({
  type: REGISTER_REQUEST,
});

export const RegisterSuccess = (registeredUser) => ({
  type: REGISTER_SUCCESS,
  payload: { registeredUser },
});

export const RegisterFail = (error) => ({
  type: REGISTER_FAIL,
  payload: error,
});

export const registerUser = (value) => {
  return async (dispatch) => {
    const payload = {
      name: value.name,
      phNo: value.phNo,
      email: value.email,
      password: value.password,
    };
    dispatch(RegisterRequest());
    try {
      const res = await registration(payload);
      const data = await res.json();

      if (res.status === 204) {
        dispatch(RegisterSuccess(data));
        return true;
      }

      dispatch(RegisterSuccess(data));
      return true;
    } catch (error) {
      dispatch(RegisterFail(error));
      console.log(error, "errors");
      return false;
    }
  };
};
