import {
  CLEAR_CART_REQUEST,
  CLEAR_CART_SUCCESS,
  CLEAR_CART_FAILURE,
} from "../../Actions/ActionTypes/types";

const initialState = {
  cart: [],
  isLoading: false,
  isError: false,
};

const clearCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case CLEAR_CART_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case CLEAR_CART_SUCCESS:
      return {
        ...state,
        isLoading: false,
        cart: action.payload.cart,
        isError: false,
      };
    case CLEAR_CART_FAILURE:
      return {
        ...state,
        isError: action.payload.error,
      };

    default:
      return state;
  }
};

export default clearCartReducer;
