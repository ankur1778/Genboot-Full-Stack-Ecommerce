import { allOrders } from "../../api/allOrders";
import {
  GET_ALL_ORDER_REQUEST,
  GET_ALL_ORDER_SUCCESS,
  GET_ALL_ORDER_FAILURE,
} from "../ActionTypes/orderActionType";

export const getOrderRequest = () => ({
  type: GET_ALL_ORDER_REQUEST,
});

export const getOrderSuccess = (orders) => ({
  type: GET_ALL_ORDER_SUCCESS,
  payload: orders,
});

export const getOrederFailure = (error) => ({
  type: GET_ALL_ORDER_FAILURE,
  payload: error,
});

export const GetAllOrders = () => {
  return async (dispatch) => {
    dispatch(getOrderRequest());
    try {
      const res = await allOrders();
      dispatch(getOrderSuccess(res));
      return true;
    } catch (error) {
      dispatch(getOrederFailure(error.message));
    }
  };
};
