import { increaseCartItem } from "../../../api/Cart";
import {
  INCREASE_CART_ITEM_QUANTITY_FAILURE,
  INCREASE_CART_ITEM_QUANTITY_REQUEST,
  INCREASE_CART_ITEM_QUANTITY_SUCCESS,
} from "../ActionTypes/types";
import { getUserCart } from "./getCartAction";

export const increaseCartItemQuantityRequest = () => ({
  type: INCREASE_CART_ITEM_QUANTITY_REQUEST,
});

export const increaseCartItemQuantitySuccess = (item) => ({
  type: INCREASE_CART_ITEM_QUANTITY_SUCCESS,
  payload: item,
});

export const increaseCartItemQuantityFailure = (error) => ({
  type: INCREASE_CART_ITEM_QUANTITY_FAILURE,
  payload: { error },
});

export const increaseCartItemQuantity = (productId) => {
  return async (dispatch) => {
    const payload = { productId };
    dispatch(increaseCartItemQuantityRequest());

    try {
      const response = await increaseCartItem(payload);
      if (response?.status) {
        dispatch(increaseCartItemQuantitySuccess(response.cart)); // ✅ Update state immediately
        dispatch(getUserCart());
      } else {
        dispatch(
          increaseCartItemQuantityFailure(response?.message || "Unknown error")
        );
      }
    } catch (error) {
      dispatch(increaseCartItemQuantityFailure(error.message));
    }
  };
};
