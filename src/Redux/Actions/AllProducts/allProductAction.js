import {
  GET_ALL_PRODUCTS_REQUEST,
  GET_ALL_PRODUCTS_SUCCESS,
  GET_ALL_PRODUCTS_FAILURE,
} from "../ActionTypes/types.js";
import { allProducts } from "../../../api/Allproducts";

export const getAllProductsRequest = () => ({
  type: GET_ALL_PRODUCTS_REQUEST,
});

export const getAllProductsSuccess = (products) => ({
  type: GET_ALL_PRODUCTS_SUCCESS,
  payload:  products ,
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
      console.log(products);
      
      return true;
    } catch (error) {
      console.error('Error fetching products:', error.message);
      dispatch(getAllProductsFailure(error));
      return false;
    }
  };
};
