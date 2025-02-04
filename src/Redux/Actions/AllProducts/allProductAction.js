import {
  GET_ALL_PRODUCTS_REQUEST,
  GET_ALL_PRODUCTS_SUCCESS,
  GET_ALL_PRODUCTS_FAILURE,
} from "../ActionTypes/types.js";
import { allProducts } from "../../../api/Allproducts";
import ToastMessage from "../../../utils/ToastMessage.js";

export const getAllProductsRequest = () => ({
  type: GET_ALL_PRODUCTS_REQUEST,
});

export const getAllProductsSuccess = (products) => ({
  type: GET_ALL_PRODUCTS_SUCCESS,
  payload: products,
});

export const getAllProductsFailure = (error) => ({
  type: GET_ALL_PRODUCTS_FAILURE,
  payload: error,
});

export const getAllProducts = () => {
  return async (dispatch) => {
    dispatch(getAllProductsRequest());
    try {
      const products = await allProducts();
      dispatch(getAllProductsSuccess(products));
      return true;
    } catch (error) {
      <ToastMessage message={"Error fetching products"} />;
      dispatch(getAllProductsFailure(error));
      return false;
    }
  };
};
