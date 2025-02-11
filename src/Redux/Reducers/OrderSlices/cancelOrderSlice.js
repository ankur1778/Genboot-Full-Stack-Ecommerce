import {
  CANCEL_ORDER_REQUEST,
  CANCEL_ORDER_SUCCESS,
  CANCEL_ORDER_FAILURE,
} from "../../Actions/ActionTypes/types";

const initialState = {
  order: [],
  isLoading: false,
  isError: false,
};

const cancelOrderSlice = (state = initialState, action) => {
  switch (action.type) {
    case CANCEL_ORDER_REQUEST:
      return {
        ...state,
        order: null,
        isLoading: true,
        isError: false,
      };
    case CANCEL_ORDER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        order: action.payload.order,
      };
    case CANCEL_ORDER_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: action.payload.error,
        order: null,
      };

    default:
      return state;
  }
};

export default cancelOrderSlice;
