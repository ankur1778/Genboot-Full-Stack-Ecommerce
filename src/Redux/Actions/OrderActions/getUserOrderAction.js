import { getUserOrders } from "../../../api/orderCheckout";
import { OrderMessage } from "../../../utils/statusMessages";
import {
  GET_USER_ORDERS_FAILURE,
  GET_USER_ORDERS_REQUEST,
  GET_USER_ORDERS_SUCCESS,
} from "../ActionTypes/types";

export const getUserOrderRequest = () => ({
  type: GET_USER_ORDERS_REQUEST,
});

export const getUserOrderSuccess = (orders) => ({
  type: GET_USER_ORDERS_SUCCESS,
  payload: orders,
});

export const getUserOrderFailure = (error) => ({
  type: GET_USER_ORDERS_FAILURE,
  payload: { error },
});

export const getUserOrder = () => {
  return async (dispatch) => {
    dispatch(getUserOrderRequest());
    try {
      const orders = await getUserOrders();
      dispatch(getUserOrderSuccess(orders));
    } catch (error) {
      dispatch(getUserOrderFailure(OrderMessage.NOT_FOUND));
    }
  };
};
