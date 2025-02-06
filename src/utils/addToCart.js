import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../Redux/Actions/CartAction/addToCartAction";
import { useState } from "react";
import ToastMessage from "./ToastMessage";
import { CartMessages } from "./statusMessages";

const AddToCartButton = ({ productId }) => {
  const dispatch = useDispatch();
  const { isLoading, isError } = useSelector((state) => state.cart);
  const [isAdded, setIsAdded] = useState(false);
  const [toast, setToast] = useState({ message: "", type: "" });

  const handleAddToCart = () => {
    dispatch(addItemToCart(productId));
    setIsAdded(true);
    setIsAdded(true);
    setToast({ message: CartMessages.ADDED, type: "success" });
  };

  return (
    <div>
      <button
        onClick={handleAddToCart}
        disabled={isLoading || isAdded}
        className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
      >
        {isLoading ? "Adding..." : isAdded ? "Added to cart" : "Add to Cart"}
      </button>
      {toast.message && (
        <ToastMessage message={toast.message} type={toast.type} />
      )}
      {isError && (
        <p style={{ color: "red" }}>
          <ToastMessage message={CartMessages.NOT_ADDED} />
        </p>
      )}
    </div>
  );
};

export default AddToCartButton;
