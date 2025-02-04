import {
  REMOVE_CART_ITEM_REQUEST,
  REMOVE_CART_ITEM_SUCCESS,
  REMOVE_CART_ITEM_FAILURE,
} from "../../Actions/ActionTypes/types";

const initialState = {
  item: [],
  isLoading: false,
  isError: false,
};

const removeItemFromCartSlice = (state = initialState, action) => {
  switch (action.type) {
    case REMOVE_CART_ITEM_REQUEST:
      return {
        ...state,
        item: [],
        isError: false,
        isLoading: true,
      };
    case REMOVE_CART_ITEM_SUCCESS:
      return {
        ...state,
        item: action.payload,
        isLoading: false,
        isError: false,
      };
    case REMOVE_CART_ITEM_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
};

export default removeItemFromCartSlice;
