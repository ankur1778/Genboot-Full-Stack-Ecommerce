import { allOrders } from "../../../api/allOrders";
import {
  GET_ALL_ORDER_REQUEST,
  GET_ALL_ORDER_SUCCESS,
  GET_ALL_ORDER_FAILURE,
} from "../ActionTypes/orderActionType";

export const getOrderRequest = () => ({
  type: GET_ALL_ORDER_REQUEST,
});

export const getOrderSuccess = (orders, totalOrders) => ({
  type: GET_ALL_ORDER_SUCCESS,
  payload: { orders, totalOrders },
});

export const getOrederFailure = (error) => ({
  type: GET_ALL_ORDER_FAILURE,
  payload: error,
});

export const GetAllOrders = (limit, page) => {
  return async (dispatch) => {
    dispatch(getOrderRequest());
    try {
      const res = await allOrders(limit, page);
      dispatch(getOrderSuccess(res.orderList, res.totalOrders));      
      return true;
    } catch (error) {
      dispatch(getOrederFailure(error.message));
    }
  };
};
