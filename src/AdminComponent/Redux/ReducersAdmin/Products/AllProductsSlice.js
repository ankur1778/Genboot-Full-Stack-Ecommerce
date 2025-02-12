import { GET_ALL_PRODUCTS_FAILURE, GET_ALL_PRODUCTS_REQUEST, GET_ALL_PRODUCTS_SUCCESS } from "../../../../Redux/Actions/ActionTypes/types";


const initialState = {
  products: [],
totalProducts: 0,

  isLoading: false,
  isError: false,
};

export const allProductsReducerAdmin = (state = initialState, action) => {
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
    isLoading: false,
    products: action.payload.products,
    totalProducts: action.payload.totalProducts, // Store total count
  };
    case GET_ALL_PRODUCTS_FAILURE:
      return {
        ...state,
        products: null,
        isLoading: false,
        isError: action.payload,
      };
    default:
      return state;
  }
};
