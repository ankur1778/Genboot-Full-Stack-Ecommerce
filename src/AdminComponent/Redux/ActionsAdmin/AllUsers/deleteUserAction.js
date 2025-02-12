
import { deleteUser } from "../../../api/allUsers";
import {
  DELETE_USER_FAILURE,
  DELETE_USER_REQUEST,
  DELETE_USER_SUCCESS,
} from "../ActionTypes/userActionType";

export const deleteUserRequest = () => ({
  type: DELETE_USER_REQUEST,
});

export const deleteUserSuccess = (user) => ({
  type: DELETE_USER_SUCCESS,
  payload: { user },
});

export const deleteUserFailure = (error) => ({
  type: DELETE_USER_FAILURE,
  payload: { error },
});

export const DeleteUser = (userId) => {
  return async (dispatch) => {
    deleteUserRequest();
    try {
      const response = await deleteUser(userId);
      dispatch(deleteUserSuccess(response));
      return true;
    } catch (error) {
      dispatch(deleteUserFailure(error));
    }
  };
};
