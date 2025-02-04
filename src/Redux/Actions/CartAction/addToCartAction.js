import { addItemTocart } from "../../../api/Cart";
import {
  ADD_PRODUCT_TO_CART_REQUEST,
  ADD_PRODUCT_TO_CART_SUCCESS,
  ADD_PRODUCT_TO_CART_FAILURE,
} from "../ActionTypes/types";

export const addItemToCartRequest = () => ({
  type: ADD_PRODUCT_TO_CART_REQUEST,
});

export const addItemToCartSuccess = (item) => ({
  type: ADD_PRODUCT_TO_CART_SUCCESS,
  payload: item,
});

export const addItemToCartFailure = (error) => ({
  type: ADD_PRODUCT_TO_CART_FAILURE,
  payload: error,
});

export const addItemToCart = (productId) => {
  return async (dispatch) => {
    const payload = { product: productId._id };
    dispatch(addItemToCartRequest());

    try {
      const response = await addItemTocart(payload);
      if (response?.status) {
        dispatch(addItemToCartSuccess(response.cart));
      } else {
        dispatch(addItemToCartFailure(response?.message || "Unknown error"));
      }
    } catch (error) {
      dispatch(addItemToCartFailure(error.message));
    }
  };
};
