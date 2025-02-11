import {
  GET_SPECIFIC_ORDER_DETAILS_FAILURE,
  GET_SPECIFIC_ORDER_DETAILS_REQUEST,
  GET_SPECIFIC_ORDER_DETAILS_SUCCESS,
} from "../../ActionsAdmin/ActionTypes/orderActionType";

const initialState = {
  order: [],
  isLoading: false,
  isError: false,
};

const getSpecificOrderReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SPECIFIC_ORDER_DETAILS_REQUEST:
      return {
        ...state,
        order: null,
        isLoading: true,
        isError: false,
      };
    case GET_SPECIFIC_ORDER_DETAILS_SUCCESS:
      return {
        ...state,
        order: action.payload,
        isLoading: false,
        isError: false,
      };

    case GET_SPECIFIC_ORDER_DETAILS_FAILURE:
      return {
        ...state,
        order: null,
        isLoading: false,
        isError: action.payload,
      };
    default:
      return state;
  }
};

export default getSpecificOrderReducer;
