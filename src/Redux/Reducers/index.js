import { combineReducers } from "redux";
import { userReducer } from "./loginReducer";
import { registerSlice } from "./registrationReducer";
import HamburgerReducer from "./HamburgerReducer";
import getAllCategoriesReducer from "./categoryIdReducer";
import getProductsByCategoriesReducer from "./productByCategoriesSlice";
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
import profileReducer from "./profileSlice";
import { ordersReducer } from "../../AdminComponent/Redux/ReducersAdmin/Orders/AllOrdersSlice";
import { userReducerAdmin } from "../../AdminComponent/Redux/ReducersAdmin/Users/userReducerAdmin";
import { allProductsReducerAdmin } from "../../AdminComponent/Redux/ReducersAdmin/Products/AllProductsSlice";
import getSpecificOrderReducer from "../../AdminComponent/Redux/ReducersAdmin/Orders/specificOrderSlice";
import deleteOrderReducer from "../../AdminComponent/Redux/ReducersAdmin/Orders/deleteOrderSlice";
import deleteUserReducer from "../../AdminComponent/Redux/ReducersAdmin/Users/deleteUserSlice";
import updateProductDetailsReducer from "../../AdminComponent/Redux/ReducersAdmin/Products/updateProductSlice";
import deleteProductReducer from "../../AdminComponent/Redux/ReducersAdmin/Products/deleteProductSlice";
import clearCartReducer from "./CartSlice/clearCartSlice";
import addProductReducer from "../../AdminComponent/Redux/ReducersAdmin/Products/AddProductSlice";

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
  clearCart: clearCartReducer,
  increaseQuantity: increaseCartItemQuantitySlice,
  decreaseQuantity: decreaseCartItemQuantitySlice,
  addToWishlist: addToWishlistReducer,
  getWishlist: getWishlistReducer,
  removeFromWishlist: removeItemFromWishlistSlice,
  singleProduct: SingleProductReducer,
  userOrders: getUserOrderSlice,
  cancelOrder: cancelOrderSlice,
  specificOrder: getSpecificOrderReducer,
  deleteOrder: deleteOrderReducer,
  getUsersDetail: profileReducer,
  deleteUser: deleteUserReducer,
  addProduct: addProductReducer,
  updateProduct: updateProductDetailsReducer,
  deleteProduct: deleteProductReducer,
});

export default rootReducer;
