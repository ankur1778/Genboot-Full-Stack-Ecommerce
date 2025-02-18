
import { deleteOrder } from "../../../api/allOrders";
import {
  DELETE_ORDER_FAILURE,
  DELETE_ORDER_REQUEST,
  DELETE_ORDER_SUCCESS,
} from "../ActionTypes/orderActionType";

export const deleteOrderRequest = () => ({
  type: DELETE_ORDER_REQUEST,
});

export const deleteOrderSuccess = (order) => ({
  type: DELETE_ORDER_SUCCESS,
  payload: { order },
});

export const deleteOrderFailure = (error) => ({
  type: DELETE_ORDER_FAILURE,
  payload: { error },
});

export const DeleteOrder = (orderId) => {
  return async (dispatch) => {
    dispatch(deleteOrderRequest());
    try {
      const response = await deleteOrder(orderId);
      dispatch(deleteOrderSuccess(response));
      return true;
    } catch (error) {
      dispatch(deleteOrderFailure(error.message));
      return false;
    }
  };
};
