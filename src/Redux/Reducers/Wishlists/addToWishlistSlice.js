import {
  ADD_TO_WISHLIST_REQUEST,
  ADD_TO_WISHLIST_SUCCESS,
  ADD_TO_WISHLIST_FAILURE,
} from "../../Actions/ActionTypes/types";

const initialstate = {
  items: [],
  isLoading: false,
  isError: false,
};

const addToWishlistReducer = (state = initialstate, action) => {
  switch (action.type) {
    case ADD_TO_WISHLIST_REQUEST:
      return {
        ...state,
        items: null,
        isLoading: true,
        isError: false,
      };
    case ADD_TO_WISHLIST_SUCCESS:
      return {
        ...state,
        items: action.payload,
        isLoading: false,
        isError: false,
      };
    case ADD_TO_WISHLIST_FAILURE:
      return {
        ...state,
        items: null,
        isLoading: false,
        isError: false,
      };
    default:
      return state;
  }
};

export default addToWishlistReducer;
