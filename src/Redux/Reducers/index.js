import { combineReducers } from "redux";
import { userReducer } from "./loginReducer";
import { registerSlice } from "./registrationReducer";
import { userReducerAdmin } from "../../AdminComponent/ReducersAdmin/userReducerAdmin";
import HamburgerReducer from "./HamburgerReducer";
import getAllProductsReducer from "./getAllProductSlice";
import getAllCategoriesReducer from "./categoryIdReducer";
import getProductsByCategoriesReducer from "./productByCategoriesSlice";
import { allProductsReducerAdmin } from "../../AdminComponent/ReducersAdmin/AllProductsSlice";

export const rootReducer = combineReducers({
  getAllProducts: allProductsReducerAdmin,
  getAllUsers: userReducerAdmin,
  auth: userReducer,
  register: registerSlice,
  hamburger: HamburgerReducer,
  allProducts: getAllProductsReducer,
  allCategories: getAllCategoriesReducer,
  productsByCategory: getProductsByCategoriesReducer,
});

export default rootReducer;
