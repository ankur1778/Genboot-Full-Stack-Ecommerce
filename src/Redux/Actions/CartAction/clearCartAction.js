import { clearCart } from "../../../api/Cart";
import {
  CLEAR_CART_FAILURE,
  CLEAR_CART_REQUEST,
  CLEAR_CART_SUCCESS,
} from "../ActionTypes/types";
import { getUserCart } from "./getCartAction";

export const clearCartRequest = () => ({
  type: CLEAR_CART_REQUEST,
});

export const clearCartSuccess = (cart) => ({
  type: CLEAR_CART_SUCCESS,
  payload: { cart },
});

export const clearCartFailure = (error) => ({
  type: CLEAR_CART_FAILURE,
  payload: { error },
});

export const ClearCart = (cartId) => {
  return async (dispatch) => {
    dispatch(clearCartRequest());
    try {
      const response = await clearCart(cartId);
      dispatch(clearCartSuccess(response));
      dispatch(getUserCart());
      return true;
    } catch (error) {
      dispatch(clearCartFailure(error.message));
      return false;
    }
  };
};
