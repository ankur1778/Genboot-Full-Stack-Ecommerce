import {
  GET_WISHLIST_REQUEST,
  GET_WISHLIST_SUCCESS,
  GET_WISHLIST_FAILURE,
} from "../../Actions/ActionTypes/types";

const initialstate = {
  items: [],
  isLoading: false,
  isError: false,
};

const getWishlistReducer = (state = initialstate, action) => {
  switch (action.type) {
    case GET_WISHLIST_REQUEST:
      return {
        ...state,
        items: null,
        isLoading: true,
        isError: false,
      };
    case GET_WISHLIST_SUCCESS:
      return {
        ...state,
        items: action.payload.items,
        isLoading: false,
        isError: false,
      };
    case GET_WISHLIST_FAILURE:
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

export default getWishlistReducer;
