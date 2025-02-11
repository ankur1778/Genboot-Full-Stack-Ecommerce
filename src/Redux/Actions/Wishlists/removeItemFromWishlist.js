import { removeFromWishlists } from "../../../api/wishlists";
import { WishListMessage } from "../../../utils/statusMessages";
import ToastMessage from "../../../utils/ToastMessage";
import {
  REMOVE_ITEM_FROM_WISHLIST_FAILURE,
  REMOVE_ITEM_FROM_WISHLIST_REQUEST,
  REMOVE_ITEM_FROM_WISHLIST_Success,
} from "../ActionTypes/types";
import { getWishlistItems } from "./getWishlist";

export const removeItemFromWishlistRequest = () => ({
  type: REMOVE_ITEM_FROM_WISHLIST_REQUEST,
});
export const removeItemFromWishlistSuccess = (item) => ({
  type: REMOVE_ITEM_FROM_WISHLIST_Success,
  payload: item,
});

export const removeItemFromWishlistFailure = (error) => ({
  type: REMOVE_ITEM_FROM_WISHLIST_FAILURE,
  payload: { error },
});

export const removeItemFromWishlist = (product) => {
  return async (dispatch) => {
    const payload = { product };
    dispatch(removeItemFromWishlistRequest());
    try {
      const response = await removeFromWishlists(payload);
      if (response?.status) {
        dispatch(removeItemFromWishlistSuccess(response));
        dispatch(getWishlistItems());
      } else {
        dispatch(
          removeItemFromWishlistFailure(
            <ToastMessage message={WishListMessage.CANT_REMOVE} />
          )
        );
      }
    } catch (error) {
      dispatch(
        removeItemFromWishlistFailure(
          <ToastMessage message={WishListMessage.CANT_REMOVE} />
        )
      );
    }
  };
};
