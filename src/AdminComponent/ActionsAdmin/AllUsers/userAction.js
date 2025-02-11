import { allUsers } from "../../api/allUsers";
import ToastMessage from "../../../utils/ToastMessage";
import {
  SHOW_USER_FAILURE,
  SHOW_USER_REQUEST,
  SHOW_USER_SUCCESS,
} from "../ActionTypes/userActionType";

export const getUsersRequest = () => ({
  type: SHOW_USER_REQUEST,
});

export const getUsersSuccess = (users, totalUsers) => ({
  type: SHOW_USER_SUCCESS,
  payload: { users, totalUsers },
});

export const getUsersFailure = (error) => ({
  type: SHOW_USER_FAILURE,
  payload: error,
});

export const UserAction = (limit, page,search,sort) => {
  return async (dispatch) => {
    dispatch(getUsersRequest());
    try {
      const res = await allUsers(limit, page,search,sort);      
      dispatch(getUsersSuccess(res.users, res.totalUsers));
      return true;
    } catch (error) {
      dispatch(getUsersFailure(<ToastMessage message={error.message} />));
    }
  };
};
