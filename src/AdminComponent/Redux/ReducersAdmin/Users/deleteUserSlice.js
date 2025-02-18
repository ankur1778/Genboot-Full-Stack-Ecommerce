import {
  DELETE_USER_REQUEST,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAILURE,
} from "../../ActionsAdmin/ActionTypes/userActionType";

const initialState = {
  user: [],
  isLoading: false,
  isError: false,
};

const deleteUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_USER_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case DELETE_USER_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        isLoading: false,
        isError: false,
      };
    case DELETE_USER_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: action.payload.error,
      };
    default:
      return state;
  }
};

export default deleteUserReducer;
