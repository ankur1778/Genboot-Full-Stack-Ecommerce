import { allProducts } from "../../api/allProducts";
import ToastMessage from "../../../utils/ToastMessage";
import {
  GET_ALL_PRODUCTS_FAILURE,
  GET_ALL_PRODUCTS_REQUEST,
  GET_ALL_PRODUCTS_SUCCESS,
} from "../../../Redux/Actions/ActionTypes/types";

export const getProductsRequest = () => ({
  type: GET_ALL_PRODUCTS_REQUEST,
});

export const getProductsSuccess = (products) => ({
  type: GET_ALL_PRODUCTS_SUCCESS,
  payload: products,
});

export const getProductsFailure = (error) => ({
  type: GET_ALL_PRODUCTS_FAILURE,
  payload: error,
});

export const GetAllProducts = () => {
  return async (dispatch) => {
    dispatch(getProductsRequest());
    try {
      const res = await allProducts();
      dispatch(getProductsSuccess(res));
      return true;
    } catch (error) {
      dispatch(getProductsFailure(<ToastMessage message={error.message} />));
    }
  };
};
