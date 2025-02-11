import { postOrder } from "../../../api/orderCheckout";
import { OrderMessage } from "../../../utils/statusMessages";
import {
  POST_ORDER_FAILURE,
  POST_ORDER_REQUEST,
  POST_ORDER_SUCCESS,
} from "../ActionTypes/types";

export const postOrderRequest = () => ({
  type: POST_ORDER_REQUEST,
});

export const postOrderSuccess = (orderPosted) => ({
  type: POST_ORDER_SUCCESS,
  payload: orderPosted,
});

export const postOrderFailure = (error) => ({
  type: POST_ORDER_FAILURE,
  error: error,
});

export const PostOrder = (values) => {
  return async (dispatch) => {
    const payload = {
      orderItems: values.orderItems,
      shippingAddress1: values.shippingAddress1,
      shippingAddress2: values.shippingAddress2,
      city: values.city,
      state: values.state,
      zip: values.zip,
      country: values.country,
      phone: values.phone,
    };
    dispatch(postOrderRequest());
    try {
      const response = await postOrder(payload);
      if (response) {        
        dispatch(postOrderSuccess(response));
        return { success: true };
      } else {
        dispatch(postOrderFailure(OrderMessage.NOT_PLACED));
        return { success: false };
      }
    } catch (error) {
      dispatch(postOrderFailure(OrderMessage.NOT_PLACED));
      return { success: false };
    }
  };
};
