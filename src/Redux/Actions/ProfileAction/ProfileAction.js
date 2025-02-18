import { allUsers } from "../../../api/profile";
import { FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE } from "../ActionTypes/types";

export const fetchUsersRequest = () => ({
  type: FETCH_USERS_REQUEST,
});

export const fetchUsersSuccess = (user) => ({
  type: FETCH_USERS_SUCCESS,
  payload: user,
});

export const fetchUsersFailure = (error) => ({
  type: FETCH_USERS_FAILURE,
  payload: error,
});

export const getUserDetail = (userId) => {
  return async (dispatch) => {
    dispatch(fetchUsersRequest());
    try {
      const user = await allUsers(userId); 
      dispatch(fetchUsersSuccess(user));  
      return true;
    } catch (error) {
      dispatch(fetchUsersFailure(error));
      return false;
    }
  };
};
