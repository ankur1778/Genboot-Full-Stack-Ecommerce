
import { deleteProduct } from "../../../api/allProducts";
import {
  DELETE_PRODUCT_FAILURE,
  DELETE_PRODUCT_REQUEST,
  DELETE_PRODUCT_SUCCESS,
} from "../ActionTypes/productActionType";

export const deleteProductRequest = () => ({
  type: DELETE_PRODUCT_REQUEST,
});

export const deleteProductSuccess = (product) => ({
  type: DELETE_PRODUCT_SUCCESS,
  payload: { product },
});

export const deleteProductFailure = (error) => ({
  type: DELETE_PRODUCT_FAILURE,
  payload: { error },
});

export const DeleteProduct = (productId) => {
  return async (dispatch) => {
    deleteProductRequest();
    try {
      const response = await deleteProduct(productId);
      dispatch(deleteProductSuccess(response));
      return true;
    } catch (error) {
      dispatch(deleteProductFailure);
      return false;
    }
  };
};
