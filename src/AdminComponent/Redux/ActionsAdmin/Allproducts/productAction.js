import {
  GET_ALL_PRODUCTS_FAILURE,
  GET_ALL_PRODUCTS_REQUEST,
  GET_ALL_PRODUCTS_SUCCESS,
} from "../../../../Redux/Actions/ActionTypes/types";
import ToastMessage from "../../../../utils/ToastMessage";
import { allProducts } from "../../../api/allProducts";

export const getProductsRequest = () => ({
  type: GET_ALL_PRODUCTS_REQUEST,
});

export const getProductsSuccess = (products, totalProducts) => ({
  type: GET_ALL_PRODUCTS_SUCCESS,
  payload: { products, totalProducts },
});

export const getProductsFailure = (error) => ({
  type: GET_ALL_PRODUCTS_FAILURE,
  payload: error,
});

export const GetAllProducts = (limit, page, search, sort) => {
  return async (dispatch) => {
    dispatch(getProductsRequest());
    try {
      const res = await allProducts(limit, page, search, sort);
      dispatch(getProductsSuccess(res.products, res.totalProducts));
      return true;
    } catch (error) {
      ToastMessage({ message: error.message });
      dispatch(getProductsFailure(error.message));
      return false;
    }
  };
};
