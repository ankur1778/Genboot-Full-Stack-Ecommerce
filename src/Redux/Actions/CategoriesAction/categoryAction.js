
import { getCategories } from "../../../api/categoryIds";
import {
  GET_ALL_CATEGORIES_REQUEST,
  GET_ALL_CATEGORIES_SUCCESS,
  GET_ALL_CATEGORIES_FAILURE,
} from "../ActionTypes/types.js";

export const getAllCategoriesSuccess = (categories) => ({
  type: GET_ALL_CATEGORIES_SUCCESS,
  payload:  categories ,
});

export const getAllCategoriesFailure = (error) => ({
  type: GET_ALL_CATEGORIES_FAILURE,
  payload: error,
});

export const getAllCategoriesRequest = () => ({
  type: GET_ALL_CATEGORIES_REQUEST,
});

export const getAllCategories = () => {
  return async (dispatch) => {
    dispatch(getAllCategoriesRequest(true));
    try {
      const categories = await getCategories();
      dispatch(getAllCategoriesSuccess(categories));
      return true;
    } catch (error) {
      dispatch(getAllCategoriesFailure(false));
      return false;
    }
  };
};
