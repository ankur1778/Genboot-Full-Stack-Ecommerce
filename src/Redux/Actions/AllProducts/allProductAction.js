import {
  GET_ALL_PRODUCTS_REQUEST,
  GET_ALL_PRODUCTS_SUCCESS,
  GET_ALL_PRODUCTS_FAILURE,
} from "./allProductsActionType";
import { allProducts } from "../../../api/auth";

export const getAllProductsRequest = () => ({
  type: GET_ALL_PRODUCTS_REQUEST,
});

export const getAllProductsSuccess = (products) => ({
  type: GET_ALL_PRODUCTS_SUCCESS,
  payload: { products },
});

export const getAllProductsFailure = (error) => ({
  type: GET_ALL_PRODUCTS_FAILURE,
  payload: error,
});

export const getAllProducts = (limit, page) => {
  return async (dispatch) => {
    dispatch(getAllProductsRequest());

    try {
      const res = await allProducts();
      const products = res.data;
      console.log(products);
      
      dispatch(getAllProductsSuccess(products));
      return true;
    } catch (error) {
      console.error(error.message);
      dispatch(getAllProductsFailure(error));
      return false;
    }
  };
};