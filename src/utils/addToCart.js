import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../Redux/Actions/CartAction/addToCartAction";
import { useState } from "react";

const AddToCartButton = ({ productId }) => {
  const dispatch = useDispatch();
  const { isLoading, isError } = useSelector((state) => state.cart);
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    dispatch(addItemToCart(productId));
    setIsAdded(true);

    // Reset added state after 2 seconds
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <div>
      <button
        onClick={handleAddToCart}
        disabled={isLoading || isAdded}
        className="px-4 py-2 bg-gray-500 hover:scale-105 text-white rounded disabled:opacity-50"
      >
        {isLoading ? "Adding..." : isAdded ? "Added to cart" : "Add to Cart"}
      </button>
      {isError && <p style={{ color: "red" }}>Error: {isError}</p>}
    </div>
  );
};

export default AddToCartButton;
