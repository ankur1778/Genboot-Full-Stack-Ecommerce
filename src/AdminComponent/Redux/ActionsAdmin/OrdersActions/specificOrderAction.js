import { specificOrderDetails } from "../../api/allOrders";
import {
  GET_SPECIFIC_ORDER_DETAILS_FAILURE,
  GET_SPECIFIC_ORDER_DETAILS_REQUEST,
  GET_SPECIFIC_ORDER_DETAILS_SUCCESS,
} from "../ActionTypes/orderActionType";

export const getSpecificOrderDetailsRequest = () => ({
  type: GET_SPECIFIC_ORDER_DETAILS_REQUEST,
});

export const getSpecificOrderDetailsSuccess = (order) => ({
  type: GET_SPECIFIC_ORDER_DETAILS_SUCCESS,
  payload: order,
});

export const getSpecificOrderDetailsFailure = (error) => ({
  type: GET_SPECIFIC_ORDER_DETAILS_FAILURE,
  payload: { error },
});

export const getSpecificOrderDetails = (orderId) => {
  return async (dispatch) => {
    dispatch(getSpecificOrderDetailsRequest());
    try {
      const order = await specificOrderDetails(orderId);
      dispatch(getSpecificOrderDetailsSuccess(order));
      return true;
    } catch (error) {
      dispatch(getSpecificOrderDetailsFailure(error));
    }
  };
};
