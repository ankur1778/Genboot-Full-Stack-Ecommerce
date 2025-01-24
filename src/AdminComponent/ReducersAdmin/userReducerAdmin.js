import {SHOW_USER_REQUEST, SHOW_USER_SUCCESS, SHOW_USER_FAILURE} from '../ActionsAdmin/userActionType'

const initialState = {
  users : [],
  isLoading : false,
  isError : false
}

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
        users: action.payload, 
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
