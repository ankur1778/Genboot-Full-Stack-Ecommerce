import {
  INCREASE_CART_ITEM_QUANTITY_REQUEST,
  INCREASE_CART_ITEM_QUANTITY_SUCCESS,
  INCREASE_CART_ITEM_QUANTITY_FAILURE,
} from "../../Actions/ActionTypes/types";

const initialState = {
  item: null,
  isLoading: false,
  isError: false,
};

const increaseCartItemQuantitySlice = (state = initialState, action) => {
  switch (action.type) {
    case INCREASE_CART_ITEM_QUANTITY_REQUEST:
      return {
        ...state,
        item: null,
        isError: false,
        isLoading: true,
      };
    case INCREASE_CART_ITEM_QUANTITY_SUCCESS:
      return {
        ...state,
        item: action.payload,
        isLoading: false,
        isError: false,
      };
    case INCREASE_CART_ITEM_QUANTITY_FAILURE:
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

export default increaseCartItemQuantitySlice;