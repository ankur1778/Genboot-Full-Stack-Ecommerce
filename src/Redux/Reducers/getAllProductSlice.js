import {
  GET_ALL_PRODUCTS_REQUEST,
  GET_ALL_PRODUCTS_SUCCESS,
  GET_ALL_PRODUCTS_FAILURE,
} from "../Actions/ActionTypes/types";

const initialState = {
  products: [],
  isLoading: false,
  isError: false,
};

const getAllProductsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_PRODUCTS_REQUEST:
      return {
        ...state,
        products: null,
        isLoading: true,
        isError: false,
      };
    case GET_ALL_PRODUCTS_SUCCESS: 
      return {
        ...state,
        products: action.payload,
        isLoading: false,
        isError: false,
      };
    case GET_ALL_PRODUCTS_FAILURE:
      return {
        ...state,
        products: null,
        isLoading: false,
        isError: action.payload.error,
      };

    default:
      return state;
  }
};

export default getAllProductsReducer;