import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL} from "../Actions/LoginActions/loginactionType";

const initialState = {
  userData: {},
  loggedIn: !!localStorage.getItem('token'),
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return{
        ...state,
        userData: null,
        loggedIn: false
      }
    case LOGIN_SUCCESS:
      return {
        ...state,
        userData:action.payload.userData,
        loggedIn: true,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        userData : null,
        loggedIn: false,
      }
    default:
      return state;
  }
};

export default userReducer;