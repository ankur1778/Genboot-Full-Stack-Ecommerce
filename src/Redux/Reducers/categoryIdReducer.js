import {
  GET_ALL_CATEGORIES_FAILURE,
  GET_ALL_CATEGORIES_REQUEST,
  GET_ALL_CATEGORIES_SUCCESS,
} from "../Actions/ActionTypes/types";

const initialState = {
  categories: [],
  loading: false,
  error: false,
};

const getAllCategoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_CATEGORIES_SUCCESS:
      return {
        ...state,
        categories: action.payload,
        error: false,
        loading: false,
      };
    case GET_ALL_CATEGORIES_REQUEST:
      return {
        ...state,
        categories: null,
        error: false,
        loading: action.payload,
      };
    case GET_ALL_CATEGORIES_FAILURE:
      return {
        ...state,
        categories: null,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default getAllCategoriesReducer;
