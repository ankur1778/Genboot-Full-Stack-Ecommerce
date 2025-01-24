import { TOGGLE_HAMBURGER } from "../Actions/HamburgerAction/HamburgerActionType"

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
  