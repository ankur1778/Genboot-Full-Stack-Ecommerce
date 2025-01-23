import { combineReducers } from "redux";
import { userReducer } from "./loginReducer";
import { registerSlice } from "./registrationReducer";
import { userReducerAdmin } from "../../AdminComponent/ReducersAdmin/userReducerAdmin";
import HamburgerReducer from "./HamburgerReducer";
import getAllProductsReducer from "./getAllProductSlice";
import getAllCategoriesReducer from "./categoryIdReducer";

export const rootReducer = combineReducers({
  getAllUsers: userReducerAdmin,
  userReducer,
  registerSlice,
  hamburger: HamburgerReducer,
  allProducts: getAllProductsReducer,
  allCategories : getAllCategoriesReducer,
});

export default rootReducer;
