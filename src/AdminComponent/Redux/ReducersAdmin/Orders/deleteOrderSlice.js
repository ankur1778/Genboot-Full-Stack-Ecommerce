import {
  DELETE_ORDER_REQUEST,
  DELETE_ORDER_SUCCESS,
  DELETE_ORDER_FAILURE,
} from "../../ActionsAdmin/ActionTypes/orderActionType";

const initialState = {
  order: [],
  isLoading: false,
  isError: false,
};

const deleteOrderReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_ORDER_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case DELETE_ORDER_SUCCESS:
      return {
        ...state,
        order: action.payload.order,
        isLoading: false,
        isError: false,
      };
    case DELETE_ORDER_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: action.payload.error,
      };
    default:
      return state;
  }
};

export default deleteOrderReducer;
