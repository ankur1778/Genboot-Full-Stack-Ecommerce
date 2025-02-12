
import { updateUser } from "../../../api/allUsers";
import {
  UPDATE_USER_DETAILS_REQUEST,
  UPDATE_USER_DETAILS_SUCCESS,
  UPDATE_USER_DETAILS_FAILURE,
} from "../ActionTypes/userActionType";
import { UserAction } from "./userAction";

export const updateUserDetailsRequest = () => ({
  type: UPDATE_USER_DETAILS_REQUEST,
});

export const updateUserDetailsSuccess = (user) => ({
  type: UPDATE_USER_DETAILS_SUCCESS,
  payload: { user },
});

export const updateUserDetailsFailure = (error) => ({
  type: UPDATE_USER_DETAILS_FAILURE,
  payload: { error },
});
export const updateUserDetails = (userId, updatedData) => {
  return async (dispatch) => {
    dispatch(updateUserDetailsRequest());
    try {
      const res = await updateUser(userId, updatedData);
      dispatch(updateUserDetailsSuccess(res));
      dispatch(UserAction(10, 1));

      return true;
    } catch (error) {
      dispatch(updateUserDetailsFailure(error.message));
      return false;
    }
  };
};
