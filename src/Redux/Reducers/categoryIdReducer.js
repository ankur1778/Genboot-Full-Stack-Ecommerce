import { GET_ALL_CATEGORIES_FAILURE, GET_ALL_CATEGORIES_REQUEST, GET_ALL_CATEGORIES_SUCCESS } from "../Actions/CategoriesAction/categoryActionType";


const initialState = {
    categories: [],  
    loading: false,
    error: null, 
  };
  
  const getAllCategoriesReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_ALL_CATEGORIES_SUCCESS:
        return {
          ...state,
          fetchDetails: action.payload,
          loading: false,
        };
      case GET_ALL_CATEGORIES_REQUEST:
        return {
          ...state,
          loading: action.payload,
        };
      case GET_ALL_CATEGORIES_FAILURE:
        return {
          ...state,
          error: action.payload,
          loading: false,
        };
      default:
        return state;
    }
  };
  
  export default getAllCategoriesReducer;