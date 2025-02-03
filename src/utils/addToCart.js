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
      <button onClick={handleAddToCart} disabled={isLoading}>
        {isLoading ? "Adding to Cart" : "Added to Cart"}
      </button>
      {isError && <p style={{ color: "red" }}>{isError}</p>}
    </div>
  );
};

export default AddToCartButton;
