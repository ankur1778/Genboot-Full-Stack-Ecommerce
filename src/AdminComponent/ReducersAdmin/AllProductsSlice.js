import {
  GET_ALL_PRODUCT_FAILURE,
  GET_ALL_PRODUCT_REQUEST,
  GET_ALL_PRODUCT_SUCCESS,
} from "../ActionsAdmin/Allproducts/productActionType";

const initialState = {
  products: null,
  isLoading: false,
  isError: false,
};

export const allProductsReducerAdmin = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_PRODUCT_REQUEST:
      return {
        ...state,
        products: null,
        isLoading: true,
        isError: false,
      };
    case GET_ALL_PRODUCT_SUCCESS:
      return {
        ...state,
        products: action.payload,
        isLoading: false,
        isError: false,
      };
    case GET_ALL_PRODUCT_FAILURE:
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
