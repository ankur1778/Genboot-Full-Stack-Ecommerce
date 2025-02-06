import {
  REMOVE_ITEM_FROM_WISHLIST_REQUEST,
  REMOVE_ITEM_FROM_WISHLIST_Success,
  REMOVE_ITEM_FROM_WISHLIST_FAILURE,
} from "../../Actions/ActionTypes/types";

const initialstate = {
  item: [],
  isLoading: false,
  isError: false,
};

const removeItemFromWishlistSlice = (state = initialstate, action) => {
  switch (action.type) {
    case REMOVE_ITEM_FROM_WISHLIST_REQUEST:
      return {
        ...state,
        item: [],
        isError: false,
        isLoading: true,
      };
    case REMOVE_ITEM_FROM_WISHLIST_Success:
      return {
        ...state,
        item: action.payload,
        isLoading: false,
        isError: false,
      };
    case REMOVE_ITEM_FROM_WISHLIST_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
};

export default removeItemFromWishlistSlice;
