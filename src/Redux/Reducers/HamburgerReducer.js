import { TOGGLE_HAMBURGER } from "../Actions/ActionTypes/types"

const initialState = {
    ishamburgerOpen: false,
  };
  
  const HamburgerReducer = (state = initialState, action) => {
    switch (action.type) {
      case TOGGLE_HAMBURGER:
        return {
          ...state,
          ishamburgerOpen: !state.ishamburgerOpen,
        };
      default:
        return state;
    }
  };
  
  export default HamburgerReducer;
  