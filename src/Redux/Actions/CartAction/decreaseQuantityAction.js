import { decreaseCartItem } from "../../../api/Cart";
import {
  DECREASE_CART_ITEM_QUANTITY_REQUEST,
  DECREASE_CART_ITEM_QUANTITY_SUCCESS,
  DECREASE_CART_ITEM_QUANTITY_FAILURE,
} from "../../Actions/ActionTypes/types";
import { getUserCart } from "./getCartAction";

export const decreaseCartItemQuantityRequest = () => ({
  type: DECREASE_CART_ITEM_QUANTITY_REQUEST,
});

export const decreaseCartItemQuantitySuccess = (item) => ({
  type: DECREASE_CART_ITEM_QUANTITY_SUCCESS,
  payload: item,
});

export const decreaseCartItemQuantityFailure = (error) => ({
  type: DECREASE_CART_ITEM_QUANTITY_FAILURE,
  payload: { error },
});

export const decreaseCartItemQuantity = (productId) => {
  return async (dispatch) => {
    const payload = { productId };
    dispatch(decreaseCartItemQuantityRequest());

    try {
      const response = await decreaseCartItem(payload);
      if (response?.status) {
        dispatch(decreaseCartItemQuantitySuccess(response.cart)); 
        dispatch(getUserCart());
      } else {
        dispatch(
          decreaseCartItemQuantityFailure(response?.message || "Unknown error")
        );
      }
    } catch (error) {
      dispatch(decreaseCartItemQuantityFailure(error.message));
    }
  };
};
