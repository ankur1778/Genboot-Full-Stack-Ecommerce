import {
  GET_CART_REQUEST,
  GET_CART_SUCCESS,
  GET_CART_FAILURE,
} from "../../Actions/ActionTypes/types";

const initialState = {
  item: [],
  isLoading: false,
  isError: false,
};

const getCartSlice = (state = initialState, action) => {
  switch (action.type) {
    case GET_CART_REQUEST:
      return {
        ...state,
        item: [],
        isError: false,
        isLoading: false,
      };
    case GET_CART_SUCCESS:
      return {
        ...state,
        item: action.payload,
        isLoading: false,
        isError: false,
      };
    case GET_CART_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: false,
      };
    default:
      return state;
  }
};

export default getCartSlice;
