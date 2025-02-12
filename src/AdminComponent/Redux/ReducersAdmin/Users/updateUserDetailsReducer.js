import {
  UPDATE_USER_DETAILS_REQUEST,
  UPDATE_USER_DETAILS_SUCCESS,
  UPDATE_USER_DETAILS_FAILURE,
} from "../../ActionsAdmin/ActionTypes/userActionType";

const initialState = {
  user: {},
  isLoading: false,
  isError: false,
};

const updateUserDetailsSlice = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_USER_DETAILS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case UPDATE_USER_DETAILS_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
      };
    case UPDATE_USER_DETAILS_FAILURE:
      return {
        ...state,
        isError: action.payload.error,
      };
    default:
      return state;
  }
};

export default updateUserDetailsSlice;
