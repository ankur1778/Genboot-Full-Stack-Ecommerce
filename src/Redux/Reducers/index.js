import { combineReducers } from "redux";
import { userReducer } from "./loginReducer";
import { registerSlice } from "./registrationReducer";
import { userReducerAdmin } from "../../AdminComponent/ReducersAdmin/userReducerAdmin";
import HamburgerReducer from "./HamburgerReducer";
import getAllProductsReducer from "./getAllProductSlice";
import getAllCategoriesReducer from "./categoryIdReducer";
import getProductsByCategoriesReducer from "./productByCategoriesSlice";
import { allProductsReducerAdmin } from "../../AdminComponent/ReducersAdmin/AllProductsSlice";
import cartSlice from "./CartSlice/CartSlice";
import getCartSlice from "./CartSlice/getCartSlice";
import removeItemFromCartSlice from "./CartSlice/removeItemSlice";
import increaseCartItemQuantitySlice from "./CartSlice/increaseQuantitySlice";
import decreaseCartItemQuantitySlice from "./CartSlice/decreaseQuantitySlice";
import SingleProductReducer from "./singleProductSlice";
import { ordersReducer } from "../../AdminComponent/ReducersAdmin/AllOrdersSlice";
import getUserOrderSlice from "./OrderSlices/getUserOrdersSlice";

export const rootReducer = combineReducers({
  getAllProducts: allProductsReducerAdmin,
  getAllUsers: userReducerAdmin,
  getAllOrders: ordersReducer,
  auth: userReducer,
  register: registerSlice,
  hamburger: HamburgerReducer,
  allProducts: getAllProductsReducer,
  allCategories: getAllCategoriesReducer,
  productsByCategory: getProductsByCategoriesReducer,
  cart: cartSlice,
  getCart: getCartSlice,
  removeCartItem: removeItemFromCartSlice,
  increaseQuantity: increaseCartItemQuantitySlice,
  decreaseQuantity: decreaseCartItemQuantitySlice,
  singleProduct: SingleProductReducer,
  userOrders: getUserOrderSlice,
});

export default rootReducer;
