import {
  GET_PRODUCTS_BY_CATEGORIES_REQUEST,
  GET_PRODUCTS_BY_CATEGORIES_FAILURE,
  GET_PRODUCTS_BY_CATEGORIES_SUCCESS,
} from "../Actions/ActionTypes/types";

const initialState = {
  productsByCategories: [],
  isLoading: false,
  isError: false,
};

const getProductsByCategoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS_BY_CATEGORIES_REQUEST:
      return {
        ...state,
        productsByCategories: null,
        isLoading: true,
        isError: false,
      };
    case GET_PRODUCTS_BY_CATEGORIES_SUCCESS:
      return {
        ...state,
        productsByCategories: action.payload,
        isLoading: false,
        isError: false,
      };
    case GET_PRODUCTS_BY_CATEGORIES_FAILURE:
      return {
        ...state,
        productsByCategories: null,
        isLoading: false,
        isError: false,
      };

    default:
      return state;
  }
};

export default getProductsByCategoriesReducer;