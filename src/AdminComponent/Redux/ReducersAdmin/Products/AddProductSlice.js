import {
  ADD_PRODUCT_REQUEST,
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_FAILURE,
} from "../../ActionsAdmin/ActionTypes/productActionType";

const initialState = {
  product: [],
  isLoading: false,
  isError: false,
};

const addProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case ADD_PRODUCT_SUCCESS:
      return {
        ...state,
        product: action.payload,
        isLoading: false,
        isError: false,
      };
    case ADD_PRODUCT_FAILURE:
      return {
        ...state,
        isError: action.payload.error,
        isLoading: false,
      };

    default:
      return state;
  }
};

export default addProductReducer;
