import {
  POST_ORDER_REQUEST,
  POST_ORDER_SUCCESS,
  POST_ORDER_FAILURE,
} from "../../Actions/ActionTypes/types";

const initialState = {
  orderPosted: [],
  isLoading: false,
  isError: false,
};

const postOrderSlice = (state = initialState, action) => {
  switch (action.type) {
    case POST_ORDER_REQUEST:
      return {
        ...state,
        orderPosted: null,
        isLoading: true,
        isError: false,
      };
    case POST_ORDER_SUCCESS:
      return {
        ...state,
        orderPosted: action.payload,
        isLoading: false,
        isError: false,
      };
    case POST_ORDER_FAILURE:
      return {
        ...state,
        orderPosted: null,
        isLoading: false,
        isError: action.payload,
      };
    default:
      return state;
  }
};

export default postOrderSlice;
