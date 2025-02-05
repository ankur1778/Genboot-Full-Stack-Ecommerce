import { registration } from "../../../api/auth";
import { AuthMessages } from "../../../utils/statusMessages.js";
import ToastMessage from "../../../utils/ToastMessage.js";
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

export const RegisterUser = (value) => {
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
      if (res) {
        dispatch(RegisterSuccess(res));
        return true;
      }
      dispatch(
        RegisterSuccess(<ToastMessage message={AuthMessages.REGISTERED} />)
      );
      return true;
    } catch (error) {
      dispatch(RegisterFail(<ToastMessage message={AuthMessages.INVALID} />));
      return false;
    }
  };
};
