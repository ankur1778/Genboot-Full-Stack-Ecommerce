import { addToWishlists } from "../../../api/wishlists";
import { WishListMessage } from "../../../utils/statusMessages";
import ToastMessage from "../../../utils/ToastMessage";
import {
  ADD_TO_WISHLIST_FAILURE,
  ADD_TO_WISHLIST_REQUEST,
  ADD_TO_WISHLIST_SUCCESS,
} from "../ActionTypes/types";

export const addToWishlistRequest = () => ({
  type: ADD_TO_WISHLIST_REQUEST,
});

export const addToWishlistSucccess = (items) => ({
  type: ADD_TO_WISHLIST_SUCCESS,
  payload: items,
});

export const addToWishlistFailure = (error) => ({
  type: ADD_TO_WISHLIST_FAILURE,
  payload: error,
});

export const addItemToWishlist = (product) => {
  return async (dispatch) => {
    dispatch(addToWishlistRequest());
    const payload = { product: product._id };
    try {
      const response = await addToWishlists(payload);
      if (response) {
        dispatch(addToWishlistSucccess(response));
      } else {
        dispatch(
          addToWishlistFailure(<ToastMessage message={WishListMessage} />)
        );
      }
    } catch (error) {
      dispatch(
        addToWishlistFailure(<ToastMessage message={WishListMessage} />)
      );
    }
  };
};
