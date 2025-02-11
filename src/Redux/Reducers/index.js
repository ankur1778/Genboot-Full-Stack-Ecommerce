import { combineReducers } from "redux";
import { userReducer } from "./loginReducer";
import { registerSlice } from "./registrationReducer";
import { userReducerAdmin } from "../../AdminComponent/ReducersAdmin/userReducerAdmin";
import HamburgerReducer from "./HamburgerReducer";
import getAllCategoriesReducer from "./categoryIdReducer";
import getProductsByCategoriesReducer from "./productByCategoriesSlice";
import { allProductsReducerAdmin } from "../../AdminComponent/ReducersAdmin/AllProductsSlice";
import cartSlice from "./CartSlice/CartSlice";
import getCartSlice from "./CartSlice/getCartSlice";
import removeItemFromCartSlice from "./CartSlice/removeItemSlice";
import increaseCartItemQuantitySlice from "./CartSlice/increaseQuantitySlice";
import decreaseCartItemQuantitySlice from "./CartSlice/decreaseQuantitySlice";
import SingleProductReducer from "./singleProductSlice";
import getUserOrderSlice from "./OrderSlices/getUserOrdersSlice";
import addToWishlistReducer from "./Wishlists/addToWishlistSlice";
import getWishlistReducer from "./Wishlists/getWishlistSlice";
import removeItemFromWishlistSlice from "./Wishlists/removeFromWishlistSlice";
import cancelOrderSlice from "./OrderSlices/cancelOrderSlice";
import getSpecificOrderReducer from "../../AdminComponent/ReducersAdmin/Orders/specificOrderAction";
import { ordersReducer } from "../../AdminComponent/ReducersAdmin/Orders/AllOrdersSlice";
import profileReducer from "./profileSlice";

export const rootReducer = combineReducers({
  getAllProducts: allProductsReducerAdmin,
  getAllUsers: userReducerAdmin,
  getAllOrders: ordersReducer,
  auth: userReducer,
  register: registerSlice,
  hamburger: HamburgerReducer,
  allCategories: getAllCategoriesReducer,
  productsByCategory: getProductsByCategoriesReducer,
  cart: cartSlice,
  getCart: getCartSlice,
  removeCartItem: removeItemFromCartSlice,
  increaseQuantity: increaseCartItemQuantitySlice,
  decreaseQuantity: decreaseCartItemQuantitySlice,
  addToWishlist: addToWishlistReducer,
  getWishlist: getWishlistReducer,
  removeFromWishlist: removeItemFromWishlistSlice,
  singleProduct: SingleProductReducer,
  userOrders: getUserOrderSlice,
  cancelOrder: cancelOrderSlice,
  specificOrder: getSpecificOrderReducer,
  getUsersDetail: profileReducer,
});

export default rootReducer;
