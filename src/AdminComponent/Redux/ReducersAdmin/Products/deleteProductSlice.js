import {
  DELETE_PRODUCT_FAILURE,
  DELETE_PRODUCT_REQUEST,
  DELETE_PRODUCT_SUCCESS,
} from "../../ActionsAdmin/ActionTypes/productActionType";

const initialState = {
  product: [],
  isLoading: false,
  isError: false,
};

const deleteProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_PRODUCT_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case DELETE_PRODUCT_SUCCESS:
      return {
        ...state,
        product: action.payload.product,
        isLoading: false,
        isError: false,
      };
    case DELETE_PRODUCT_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: action.payload.error,
      };
    default:
      return state;
  }
};

export default deleteProductReducer;
