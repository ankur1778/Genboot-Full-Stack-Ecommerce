import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../Redux/Actions/CartAction/addToCartAction";

const AddToCartButton = ({ productId }) => {
  const dispatch = useDispatch();
  const { isLoading, isError } = useSelector((state) => state.cart);
  const handleAddToCart = () => {
    dispatch(addItemToCart(productId));
    console.log(productId);
  };
  return (
    <div>
      {" "}
      <button
        className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
        onClick={handleAddToCart}
        disabled={isLoading}
      >
        {isLoading ? "Adding to Cart" : "Add to Cart"}
      </button>
      {isError && <p style={{ color: "red" }}>{isError}</p>}
    </div>
  );
};

export default AddToCartButton;