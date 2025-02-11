import { cancelOrder } from "../../../api/orderCheckout";
import {
  CANCEL_ORDER_FAILURE,
  CANCEL_ORDER_REQUEST,
  CANCEL_ORDER_SUCCESS,
} from "../ActionTypes/types";

export const cancelOrderRequest = () => ({
  type: CANCEL_ORDER_REQUEST,
});

export const cancelOrderSuccess = (order) => ({
  type: CANCEL_ORDER_SUCCESS,
  payload: order,
});

export const cancelOrderFailure = (error) => ({
  type: CANCEL_ORDER_FAILURE,
  payload: { error },
});

export const orderCancellation = (orderId) => {
  return async (dispatch) => {
    dispatch(cancelOrderRequest());
    try {
      const response = await cancelOrder(orderId);       
      dispatch(cancelOrderSuccess(response));
    } catch (error) {
      dispatch(cancelOrderFailure(error.message));
    }
  };
};
