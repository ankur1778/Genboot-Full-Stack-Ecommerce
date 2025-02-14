import {
  SHOW_USER_FAILURE,
  SHOW_USER_REQUEST,
  SHOW_USER_SUCCESS,
} from "../../ActionsAdmin/ActionTypes/userActionType";

const initialState = {
  users: [],
  totalUsers: 0,
  isLoading: false,
  isError: false,
};

export const userReducerAdmin = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_USER_REQUEST:
      return {
        ...state,
        users: [],
        isLoading: true,
        isError: false,
      };
    case SHOW_USER_SUCCESS:
      return {
        ...state,
        users: action.payload.users,
        totalUsers: action.payload.totalUsers,
        isLoading: false,
        isError: false,
      };
    case SHOW_USER_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: action.payload,
      };
    default:
      return state;
  }
};
