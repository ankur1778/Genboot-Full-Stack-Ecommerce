import { productsByCategory } from "../../../api/productByCategory";
import {
  GET_PRODUCTS_BY_CATEGORIES_REQUEST,
  GET_PRODUCTS_BY_CATEGORIES_FAILURE,
  GET_PRODUCTS_BY_CATEGORIES_SUCCESS,
} from "../ActionTypes/types";

export const getProductsByCategoriesRequest = () => ({
  type: GET_PRODUCTS_BY_CATEGORIES_REQUEST,
});

export const getProductsByCategoriesSuccess = (productsByCategories) => ({
  type: GET_PRODUCTS_BY_CATEGORIES_SUCCESS,
  payload: productsByCategories,
});

export const getProductsByCategoriesFailure = (error) => ({
  type: GET_PRODUCTS_BY_CATEGORIES_FAILURE,
  payload: error,
});

export const getProductsByCategories = (categoryId) => {
  return async (dispatch) => {
    dispatch(getProductsByCategoriesRequest());
    try {
      const productsByCategories = await productsByCategory(categoryId);
      console.log(productsByCategories);
      
      dispatch(getProductsByCategoriesSuccess(productsByCategories));
      return true;
    } catch (error) {
      dispatch(getProductsByCategoriesFailure(error));
      console.error("Error Fetching Products", error.message);
      return false;
    }
  };
};
