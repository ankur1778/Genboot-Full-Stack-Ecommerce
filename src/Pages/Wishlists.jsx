import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getWishlistItems } from "../Redux/Actions/Wishlists/getWishlist";
import Navbar from "../Components/Navbar";
import ToastMessage from "../utils/ToastMessage";
import { WishListMessage } from "../utils/statusMessages";
import remove from "../Images/removeItem.svg";
import MotionPath from "../Components/loader";
import { removeItemFromWishlist } from "../Redux/Actions/Wishlists/removeItemFromWishlist";

const Wishlists = () => {
  const dispatch = useDispatch();
  const { items, isLoading, isError } = useSelector(
    (state) => state.getWishlist
  );
  const handleRemoveItem = (product) => {
    dispatch(removeItemFromWishlist(product));
  };
  useEffect(() => {
    dispatch(getWishlistItems());
  }, [dispatch]);

  if (isError) {
    return <ToastMessage message={WishListMessage.EMPTY} />;
  }

  return (
    <>
      <Navbar />
      <div className="w-full flex justify-center items-center mt-6">
        <div className="px-8 py-6 shadow-xl rounded-2xl border w-[90%] max-w-4xl bg-white">
          <h2 className="text-3xl font-serif font-semibold text-center mb-6">
            Your Wishlist Items
          </h2>
          {isLoading ? (
            <div className="flex justify-center items-center mt-8">
              <MotionPath />
            </div>
          ) : items?.length === 0 ? (
            <p className="text-center text-gray-500 text-lg mt-6">
              Your Wishlist is Empty
            </p>
          ) : (
            items?.map((item) => (
              <div
                key={item?._id}
                className="flex justify-between items-center mt-4 p-4 border-b last:border-none rounded-lg hover:shadow-lg transition-all"
              >
                <div className="flex gap-4">
                  <div className="w-24 h-24 shrink-0 bg-gray-200 p-2 rounded-md">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-contain rounded-md"
                    />
                  </div>
                  <div>
                    <p className="text-gray-800 font-medium text-lg">
                      {item.name}
                    </p>
                    <p className="text-gray-600 text-sm line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <button
                    type="button"
                    onClick={() => handleRemoveItem(item._id)}
                    className="mt-6 font-semibold text-red-500 text-xs flex gap-1 shrink-0"
                  >
                    <img
                      src={remove}
                      className="w-4 fill-current inline"
                      alt=""
                    />
                    REMOVE
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default Wishlists;
