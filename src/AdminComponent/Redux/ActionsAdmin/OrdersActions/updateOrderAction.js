import { updateOrderStatus } from "../../../api/allOrders";
import {
  UPDATE_ORDER_STATUS_FAILURE,
  UPDATE_ORDER_STATUS_REQUEST,
  UPDATE_ORDER_STATUS_SUCCESS,
} from "../ActionTypes/orderActionType";

export const updateOrderStatusRequest = () => ({
  type: UPDATE_ORDER_STATUS_REQUEST,
});

export const updateOrderStatusSuccess = (order) => ({
  type: UPDATE_ORDER_STATUS_SUCCESS,
  payload: order,
});

export const updateOrderStatusFailure = (error) => ({
  type: UPDATE_ORDER_STATUS_FAILURE,
  payload: error,
});

export const UpdateOrderStatus = (orderId, status) => {
  return async (dispatch) => {
    dispatch(updateOrderStatusRequest());
    try {
      const response = await updateOrderStatus(orderId, status);
      dispatch(updateOrderStatusSuccess(response));
      return true;
    } catch (error) {
      dispatch(updateOrderStatusFailure(error.message));
      return false;
    }
  };
};
