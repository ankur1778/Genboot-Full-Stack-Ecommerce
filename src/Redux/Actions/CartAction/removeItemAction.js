import { removeItem } from "../../../api/Cart";
import {
  REMOVE_CART_ITEM_REQUEST,
  REMOVE_CART_ITEM_SUCCESS,
  REMOVE_CART_ITEM_FAILURE,
} from "../ActionTypes/types";
import { getUserCart } from "./getCartAction";

export const removeCartItemRequest = () => ({
  type: REMOVE_CART_ITEM_REQUEST,
});

export const removeCartItemSuccess = (product) => ({
  type: REMOVE_CART_ITEM_SUCCESS,
  payload: product,
});

export const removeCartItemFailure = (error) => ({
  type: REMOVE_CART_ITEM_FAILURE,
  payload: { error },
});
export const removeItemFromCart = (productId) => {
    return async (dispatch) => {
      const payload = { productId };
      dispatch(removeCartItemRequest());
  
      try {
        const response = await removeItem(payload);
        if (response?.status) {
          dispatch(removeCartItemSuccess(response.cart)); // ✅ Update state immediately
          dispatch(getUserCart());           
        } else {
          dispatch(removeCartItemFailure(response?.message || "Unknown error"));
        }
      } catch (error) {
        dispatch(removeCartItemFailure(error.message));
      }
    };
  };
  