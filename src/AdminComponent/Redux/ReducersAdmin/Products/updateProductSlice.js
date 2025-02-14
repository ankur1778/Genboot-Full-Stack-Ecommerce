import {
  UPDATE_PRODUCT_DETAILS_FAILURE,
  UPDATE_PRODUCT_DETAILS_REQUEST,
  UPDATE_PRODUCT_DETAILS_SUCCESS,
} from "../../ActionsAdmin/ActionTypes/productActionType";

const initialState = {
  product: {},
  isLoading: false,
  isError: false,
};

const updateProductDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_PRODUCT_DETAILS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case UPDATE_PRODUCT_DETAILS_SUCCESS:
      return {
        ...state,
        product: action.payload.product,
      };
    case UPDATE_PRODUCT_DETAILS_FAILURE:
      return {
        ...state,
        isError: action.payload.error,
      };
    default:
      return state;
  }
};

export default updateProductDetailsReducer;
