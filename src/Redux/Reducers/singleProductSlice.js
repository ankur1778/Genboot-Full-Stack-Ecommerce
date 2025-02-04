// import {
//     SINGLE_PRODUCT_REQUEST,
//     SINGLE_PRODUCT_SUCCESS,
//     SINGLE_PRODUCT_FAILURE,
//   } from "../Actions/ActionTypes/types";
  
//   const initialState = {
//     products: [],  // Update from 'product' to 'products'
//     isLoading: false,
//     isError: false,
//   };
  
//   const SingleProductReducer = (state = initialState, action) => {
//     switch (action.type) {
//       case SINGLE_PRODUCT_REQUEST:
//         return {
//           ...state,
//           products: null,
//           isLoading: true,
//           isError: false,
//         };
//       case SINGLE_PRODUCT_SUCCESS:
//         return {
//           ...state,
//           products: action.payload,
//           isLoading: false,
//           isError: false,
//         };
//       case SINGLE_PRODUCT_FAILURE:
//         return {
//           ...state,
//           products: null,
//           isLoading: false,
//           isError: action.payload.error,
//         };
//       default:
//         return state;
//     }
//   };
  
//   export default SingleProductReducer;
  

import {
    SINGLE_PRODUCT_REQUEST,
    SINGLE_PRODUCT_SUCCESS,
    SINGLE_PRODUCT_FAILURE,
  } from "../Actions/ActionTypes/types";
  
  const initialState = {
    products: [],  // Initialize as null to avoid errors
    isLoading: false,
    isError: false,
  };
  
  const SingleProductReducer = (state = initialState, action) => {
    switch (action.type) {
      case SINGLE_PRODUCT_REQUEST:
        return {
          ...state,
          products: null,
          isLoading: true,
          isError: false,
        };
      case SINGLE_PRODUCT_SUCCESS:
        return {
          ...state,
          products: action.payload,  // Ensure product data is properly assigned
          isLoading: false,
          isError: false,
        };
      case SINGLE_PRODUCT_FAILURE:
        return {
          ...state,
          products: null,
          isLoading: false,
          isError: true,  // Make this `true` instead of storing error directly
        };
      default:
        return state;
    }
  };
  
  export default SingleProductReducer;
  