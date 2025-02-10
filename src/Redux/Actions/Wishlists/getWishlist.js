import { getWishlists } from "../../../api/wishlists";
import { WishListMessage } from "../../../utils/statusMessages";
import ToastMessage from "../../../utils/ToastMessage";
import {
  GET_WISHLIST_FAILURE,
  GET_WISHLIST_REQUEST,
  GET_WISHLIST_SUCCESS,
} from "../ActionTypes/types";

export const getWishlistRequest = () => ({
  type: GET_WISHLIST_REQUEST,
});
export const getWishlistSuccess = (wishlist) => ({
  type: GET_WISHLIST_SUCCESS,
  payload: {
    items: wishlist.products.map((item) => item.product),
  },
});

export const getWishlistFailure = (error) => ({
  type: GET_WISHLIST_FAILURE,
  payload: error,
});

export const getWishlistItems = () => {
  return async (dispatch) => {
    dispatch(getWishlistRequest());
    try {
      const wishlist = await getWishlists();
      dispatch(getWishlistSuccess(wishlist));
    } catch (error) {
      dispatch(
        getWishlistFailure(<ToastMessage message={WishListMessage.NOT_FOUND} />)
      );
    }
  };
};
