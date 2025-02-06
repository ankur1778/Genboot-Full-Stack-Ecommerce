import { GET_ALL_ORDER_REQUEST, GET_ALL_ORDER_SUCCESS, GET_ALL_ORDER_FAILURE } from "../ActionsAdmin/AllOrders/orderActionType";

const initialState ={
    orders: [],
    isLoading: false,
    isError: false,
}

export const ordersReducer = (state = initialState, action) =>{
    switch(action.type){
        case GET_ALL_ORDER_REQUEST:
            return {
                ...state,
                orders: null,
                isLoading: true,
                isError: false,
            }
            case GET_ALL_ORDER_SUCCESS:
                return {
                  ...state,
                  orders: action.payload, 
                  isLoading: false,
                  isError: false,
                };
              
            case GET_ALL_ORDER_FAILURE:
                return{
                    ...state,
                    orders: null,
                    isLoading: false,
                    isError: action.payload,
                }
                default:
                    return state;
    }
}