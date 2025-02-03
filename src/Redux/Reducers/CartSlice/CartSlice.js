import {
  ADD_PRODUCT_TO_CART_REQUEST,
  ADD_PRODUCT_TO_CART_SUCCESS,
  ADD_PRODUCT_TO_CART_FAILURE,
} from "../../Actions/ActionTypes/types";

const initialState = {
  cart: [],
  isLoading: false,
  isError: false,
};

const cartSlice = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT_TO_CART_REQUEST:
      return {
        ...state,
        cart: [],
        isError: false,
        isLoading: false,
      };
    case ADD_PRODUCT_TO_CART_SUCCESS:
      return {
        ...state,
        cart: action.payload,
        isLoading: false,
        isError: false,
      };
    case ADD_PRODUCT_TO_CART_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: false,
      };
    default:
      return state;
  }
};

export default cartSlice;
