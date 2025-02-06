import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItemToWishlist } from "../Redux/Actions/Wishlists/postWishlist";
import ToastMessage from "./ToastMessage";
import { WishListMessage } from "./statusMessages";
import wishlist from "../Images/wishlist.svg";
import { removeItemFromWishlist } from "../Redux/Actions/Wishlists/removeItemFromWishlist";

const AddToWishlistButton = ({ product }) => {
  const dispatch = useDispatch();
  const { isLoading, isError } = useSelector((state) => state.addToWishlist);
  const [isAdded, setIsAdded] = useState(false);
  const [toast, setToast] = useState({ message: "", type: "" });

  const handleAddToWishlist = () => {
    dispatch(addItemToWishlist(product));
    setIsAdded(true);
    setToast({ message: WishListMessage.ADDED, type: "success" });
  };

  const handleRemoveFromWishlist = () => {
    dispatch(removeItemFromWishlist(product));
    setIsAdded(false);
    setToast({ message: WishListMessage.REMOVED, type: "error" });
  };

  return (
    <div>
      <button
        onClick={isAdded ? handleRemoveFromWishlist : handleAddToWishlist}
        disabled={isLoading}
        className="px-2 py-2 text-white text-xs font-bold uppercase rounded-full hover:scale-110 focus:outline-none focus:bg-gray-700"
      >
        {isLoading ? (
          "Processing..."
        ) : isAdded ? (
          <p className="w-8 h-8 text-xl">💖</p>
        ) : (
          <div className="text-white">
            <img src={wishlist} className="w-6" alt="wishlist icon" />
          </div>
        )}
      </button>

      {toast.message && (
        <ToastMessage message={toast.message} type={toast.type} />
      )}

      {isError && (
        <p style={{ color: "red" }}>
          <ToastMessage message={WishListMessage.CANT_ADD} type="error" />
        </p>
      )}
    </div>
  );
};

export default AddToWishlistButton;
