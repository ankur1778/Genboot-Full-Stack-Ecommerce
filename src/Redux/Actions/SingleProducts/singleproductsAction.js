import { SingleProduct } from "../../../api/singleproduct";
import { ProductMessages } from "../../../utils/statusMessages";
import ToastMessage from "../../../utils/ToastMessage";
import {
  SINGLE_PRODUCT_REQUEST,
  SINGLE_PRODUCT_SUCCESS,
  SINGLE_PRODUCT_FAILURE,
} from "../ActionTypes/types";

export const singleProductRequest = () => ({
  type: SINGLE_PRODUCT_REQUEST,
});

export const singleProductSuccess = (product) => ({
  type: SINGLE_PRODUCT_SUCCESS,
  payload: product,
});

export const singleProductFailure = (error) => ({
  type: SINGLE_PRODUCT_FAILURE,
  payload: error,
});

export const getSingleProduct = (productId) => {
  return async (dispatch) => {
    dispatch(singleProductRequest());
    try {
      const product = await SingleProduct(productId);
      dispatch(singleProductSuccess(product));
      return true;
    } catch (error) {
      dispatch(
        singleProductFailure(
          <ToastMessage message={ProductMessages.NOT_FOUND} />
        )
      );
      return false;
    }
  };
};