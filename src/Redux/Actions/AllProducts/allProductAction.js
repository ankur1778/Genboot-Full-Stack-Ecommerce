import {
  GET_ALL_PRODUCTS_REQUEST,
  GET_ALL_PRODUCTS_SUCCESS,
  GET_ALL_PRODUCTS_FAILURE,
} from "../ActionTypes/types.js";
import { allProducts } from "../../../api/Allproducts";
import ToastMessage from "../../../utils/ToastMessage.js";
import { ProductMessages } from "../../../utils/statusMessages.js";

export const getAllProductsRequest = () => ({
  type: GET_ALL_PRODUCTS_REQUEST,
});

export const getAllProductsSuccess = (products, totalProducts) => ({
  type: GET_ALL_PRODUCTS_SUCCESS,
  payload: { products, totalProducts },
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
      dispatch(
        getAllProductsSuccess(products.products, products.totalProducts)
      );
      return true;
    } catch (error) {
      <ToastMessage message={ProductMessages.NOT_FETCH} />;
      dispatch(getAllProductsFailure(error));
      return false;
    }
  };
};
