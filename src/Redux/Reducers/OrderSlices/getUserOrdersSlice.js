import {
  GET_USER_ORDERS_REQUEST,
  GET_USER_ORDERS_SUCCESS,
  GET_USER_ORDERS_FAILURE,
} from "../../Actions/ActionTypes/types";

const initialState = {
  orders: [],
  isLoading: false,
  isError: false,
};

const getUserOrderSlice = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_ORDERS_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
        orders: null,
      };
    case GET_USER_ORDERS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        orders: action.payload,
        isError: false,
      };
    case GET_USER_ORDERS_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: action.payload,
        orders: null,
      };

    default:
      return state;
  }
};

export default getUserOrderSlice;
