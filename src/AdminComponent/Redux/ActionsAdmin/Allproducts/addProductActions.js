import { addProduct } from "../../../api/allProducts";
import {
  ADD_PRODUCT_FAILURE,
  ADD_PRODUCT_REQUEST,
  ADD_PRODUCT_SUCCESS,
} from "../ActionTypes/productActionType";

export const addProductRequest = () => ({
  type: ADD_PRODUCT_REQUEST,
});

export const addProductSuccess = (product) => ({
  type: ADD_PRODUCT_SUCCESS,
  payload: product,
});

export const addProductFailure = (error) => ({
  type: ADD_PRODUCT_FAILURE,
  payload: { error },
});

export const AddProduct = (values) => {
  return async (dispatch) => {
    dispatch(addProductRequest());
    try {
      const res = await addProduct(values);
      if (res) {
        dispatch(addProductSuccess(res));
        return { success: true };
      }
    } catch (error) {
      dispatch(addProductFailure(error));
      return { success: false };
    }
  };
};
