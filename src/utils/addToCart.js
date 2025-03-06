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
        type="button"
        data-ripple-light="true"
        className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
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
