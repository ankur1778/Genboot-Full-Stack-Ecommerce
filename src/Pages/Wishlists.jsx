import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getWishlistItems } from "../Redux/Actions/Wishlists/getWishlist";
import Navbar from "../Components/Navbar";
import ToastMessage from "../utils/ToastMessage";
import { WishListMessage } from "../utils/statusMessages";
import remove from "../Images/removeItem.svg";
import MotionPath from "../Components/loader";
import { removeItemFromWishlist } from "../Redux/Actions/Wishlists/removeItemFromWishlist";
import AddToCartButton from "../utils/addToCart";
import { Link } from "react-router-dom";

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
          <div className="product-list">
            {isLoading ? (
              <MotionPath />
            ) : (
              <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 px-10">
                {items?.map((product) => (
                  <div
                    key={product._id}
                    className="bg-white shadow-md rounded-lg p-4"
                  >
                    <Link to={`/product/${product._id}`}>
                      <div className="flex justify-center">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="transition-shadow duration-300 cursor-pointer hover:shadow-lg hover:shadow-gray-400 hover:scale-110 rounded-md h-48 delay-700 ease-in"
                        />
                      </div>
                      <div className="mt-4">
                        <h1 className="text-sm uppercase font-bold hover:text-blue-900">
                          {product.name}
                        </h1>
                        <p className="mt-2 text-gray-600 text-sm">
                          {product.description.slice(0, 40)}...
                        </p>
                        <p className="mt-2 font-semibold text-gray-600">
                          ₹{product.price}
                        </p>
                      </div>
                    </Link>
                    <div className="mt-6 flex justify-between items-center">
                      <AddToCartButton productId={product} />
                      <div className="text-red-500">
                        <img
                          className="w-4 fill-current inline cursor-pointer"
                          src={remove}
                          alt=""
                          onClick={handleRemoveItem}
                        />
                        Remove
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Wishlists;
