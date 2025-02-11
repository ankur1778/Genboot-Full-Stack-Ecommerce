import {
  UPDATE_ORDER_STATUS_FAILURE,
  UPDATE_ORDER_STATUS_REQUEST,
  UPDATE_ORDER_STATUS_SUCCESS,
} from "../../ActionsAdmin/ActionTypes/orderActionType";

const initialState = {
  orders: [],
  isLoading: false,
  isError: false,
};

const updateOrderStatusReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_ORDER_STATUS_REQUEST:
      return {
        ...state,
        orders: null,
        isLoading: true,
        isError: false,
      };
    case UPDATE_ORDER_STATUS_SUCCESS:
      return {
        ...state,
        orders: action.payload,
        isLoading: false,
        isError: false,
      };

    case UPDATE_ORDER_STATUS_FAILURE:
      return {
        ...state,
        orders: null,
        isLoading: false,
        isError: action.payload,
      };
    default:
      return state;
  }
};

export default updateOrderStatusReducer;
