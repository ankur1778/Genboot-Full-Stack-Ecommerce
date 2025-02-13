import { getCart } from "../../../api/Cart";
import { CartMessages } from "../../../utils/statusMessages";
import ToastMessage from "../../../utils/ToastMessage";
import {
  GET_CART_REQUEST,
  GET_CART_SUCCESS,
  GET_CART_FAILURE,
} from "../ActionTypes/types";

export const getUserCartRequest = () => ({
  type: GET_CART_REQUEST,
});

export const getUserCartSuccess = (cart) => ({
  type: GET_CART_SUCCESS,
  payload: cart,
});

export const getUserCartFailure = (error) => ({
  type: GET_CART_FAILURE,
  payload: error,
});

export const getUserCart = () => {
  return async (dispatch) => {
    dispatch(getUserCartRequest());
    try {
      const cart = await getCart();
      dispatch(getUserCartSuccess(cart));
    } catch (error) {
      dispatch(
        getUserCartFailure(<ToastMessage message={CartMessages.NOT_FOUND} />)
      );
    }
  };
};
