import {
  DECREASE_CART_ITEM_QUANTITY_REQUEST,
  DECREASE_CART_ITEM_QUANTITY_SUCCESS,
  DECREASE_CART_ITEM_QUANTITY_FAILURE,
} from "../../Actions/ActionTypes/types";

const initialState = {
  item: null,
  isLoading: false,
  isError: false,
};

const decreaseCartItemQuantitySlice = (state = initialState, action) => {
  switch (action.type) {
    case DECREASE_CART_ITEM_QUANTITY_REQUEST:
      return {
        ...state,
        item: null,
        isError: false,
        isLoading: true,
      };
    case DECREASE_CART_ITEM_QUANTITY_SUCCESS:
      return {
        ...state,
        item: action.payload,
        isLoading: false,
        isError: false,
      };
    case DECREASE_CART_ITEM_QUANTITY_FAILURE:
      return {
        ...state,
        item: null,
        isLoading: false,
        isError: true,
      };

    default:
      return state;
  }
};

export default decreaseCartItemQuantitySlice;