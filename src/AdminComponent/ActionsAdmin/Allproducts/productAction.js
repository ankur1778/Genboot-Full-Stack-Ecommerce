import { GET_ALL_PRODUCT_REQUEST,GET_ALL_PRODUCT_SUCCESS,GET_ALL_PRODUCT_FAILURE } from "./productActionType";
import { allProducts } from "../../api/allProducts";

export const getProductsRequest = () => ({
  type: GET_ALL_PRODUCT_REQUEST,
});

export const getProductsSuccess = (products) => ({
  type: GET_ALL_PRODUCT_SUCCESS,
  payload: products,
});

export const getProductsFailure = (error) => ({
  type: GET_ALL_PRODUCT_FAILURE,
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
      dispatch(getProductsFailure(error.message));
    }
  };
};