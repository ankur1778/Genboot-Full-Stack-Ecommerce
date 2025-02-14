import { updateProduct } from "../../../api/allProducts";
import {
  UPDATE_PRODUCT_DETAILS_FAILURE,
  UPDATE_PRODUCT_DETAILS_REQUEST,
  UPDATE_PRODUCT_DETAILS_SUCCESS,
} from "../ActionTypes/productActionType";

export const updateProductDetailsRequest = () => ({
  type: UPDATE_PRODUCT_DETAILS_REQUEST,
});

export const updateProducrtDetailsSuccess = (product) => ({
  type: UPDATE_PRODUCT_DETAILS_SUCCESS,
  payload: { product },
});

export const updateProductDetailsFailure = (error) => ({
  type: UPDATE_PRODUCT_DETAILS_FAILURE,
  payload: { error },
});

export const updateProductDetails = (productId, updatedData) => {
  return async (dispatch) => {
    dispatch(updateProductDetailsRequest());
    try {
      const res = await updateProduct(productId, updatedData);
      dispatch(updateProducrtDetailsSuccess(res));
      return true;
    } catch (error) {
      dispatch(updateProductDetailsFailure(error.message));
      return false;
    }
  };
};
