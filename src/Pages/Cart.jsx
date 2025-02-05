import React, { useEffect } from "react";
import Navbar from "../Components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { getUserCart } from "../Redux/Actions/CartAction/getCartAction";
import { Link } from "react-router-dom";
import MotionPath from "../Components/loader";
import removeItem from "../Images/removeItem.svg";
import increaseQuantity from "../Images/increaseQuantity.svg";
import decreaseQuantity from "../Images/decreaseQuantity.svg";
import { removeItemFromCart } from "../Redux/Actions/CartAction/removeItemAction";
import { increaseCartItemQuantity } from "../Redux/Actions/CartAction/increaseQuantityAction";
import { decreaseCartItemQuantity } from "../Redux/Actions/CartAction/decreaseQuantityAction";
import ToastMessage from "../utils/ToastMessage";
import { CartMessages, ProductMessages } from "../utils/statusMessages";

const Cart = () => {
  const dispatch = useDispatch();
  const { item, isLoading, isError } = useSelector((state) => state.getCart);

  useEffect(() => {
    dispatch(getUserCart());
  }, [dispatch]);

  const handleRemoveItem = (productId) => {
    dispatch(removeItemFromCart(productId));
  };

  const handleIncreaseCartItemQuantity = (productId) => {
    dispatch(increaseCartItemQuantity(productId));
  };
  const handleDecreaseCartItemQuantity = (productId) => {
    dispatch(decreaseCartItemQuantity(productId));
  };

  const calculateTotal = () => {
    return item.reduce(
      (total, currentItem) =>
        total + currentItem.product.price * currentItem.quantity,
      0
    );
  };

  return (
    <>
      <Navbar />
      <div className="font-sans max-w-5xl max-md:max-w-xl mx-auto bg-white py-4">
        <h1 className="text-3xl font-bold text-gray-800 text-center">
          Shopping Cart
        </h1>
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="md:col-span-2 space-y-4">
            {isLoading ? (
              <div>
                <MotionPath />
              </div>
            ) : isError ? (
              <div style={{ color: "red" }}>
                <ToastMessage message={ProductMessages.NOT_FOUND} />
              </div>
            ) : item && item.length > 0 ? (
              item.map((product) => (
                <div
                  key={product._id}
                  className="grid grid-cols-3 items-start gap-4"
                >
                  <div className="col-span-2 flex items-start gap-4">
                    <div className="w-28 h-28 max-sm:w-24 max-sm:h-24 shrink-0 bg-gray-100 p-2 rounded-md">
                      <img
                        src={product.product.image}
                        alt={product.product.name}
                        className="w-full h-full object-contain"
                      />
                    </div>

                    <div className="flex flex-col">
                      <h3 className="text-base font-bold text-gray-800">
                        {product.product.name}
                      </h3>

                      <button
                        type="button"
                        onClick={() => handleRemoveItem(product.product._id)}
                        className="mt-6 font-semibold text-red-500 text-xs flex items-center gap-1 shrink-0"
                      >
                        <img
                          src={removeItem}
                          className="w-4 fill-current inline"
                          alt=""
                        />
                        REMOVE
                      </button>
                    </div>
                  </div>

                  <div className="ml-auto">
                    <h4 className="text-lg max-sm:text-base font-bold text-gray-800">
                      ₹{product.product.price}
                    </h4>
                    <button
                      type="button"
                      className="mt-6 flex items-center px-3 py-1.5 border border-gray-300 text-gray-800 text-xs outline-none bg-transparent rounded-md"
                    >
                      <img
                        src={decreaseQuantity}
                        className="w-2.5 fill-current"
                        onClick={() =>
                          handleDecreaseCartItemQuantity(product.product._id)
                        }
                        alt=""
                      />

                      <span className="mx-3 font-bold">{product.quantity}</span>
                      <img
                        src={increaseQuantity}
                        className="w-2.5 fill-current"
                        onClick={() =>
                          handleIncreaseCartItemQuantity(product.product._id)
                        }
                        alt=""
                      />
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div>
                <ToastMessage message={CartMessages.EMPTY} />
              </div>
            )}
            <hr className="border-gray-300" />
          </div>

          <div className="bg-gray-100 rounded-md p-4 h-max">
            <h3 className="text-lg max-sm:text-base font-bold text-gray-800 border-b border-gray-300 pb-2">
              Order Summary
            </h3>

            <ul className="text-gray-800 mt-6 space-y-3">
              <li className="flex flex-wrap gap-4 text-sm">
                Subtotal{" "}
                <span className="ml-auto font-bold">
                  ₹{calculateTotal().toFixed(2)}
                </span>
              </li>
              <li className="flex flex-wrap gap-4 text-sm">
                Shipping <span className="ml-auto font-bold">₹2.00</span>
              </li>
              <li className="flex flex-wrap gap-4 text-sm">
                Tax <span className="ml-auto font-bold">₹4.00</span>
              </li>
              <hr className="border-gray-300" />
              <li className="flex flex-wrap gap-4 text-sm font-bold">
                Total{" "}
                <span className="ml-auto">
                  ₹{(calculateTotal() + 6).toFixed(2)}
                </span>
              </li>
            </ul>

            <div className="mt-6 space-y-3">
              <Link to="/cart/checkout">
                {" "}
                <button
                  type="button"
                  className="text-sm px-4 py-2.5 w-full font-semibold tracking-wide bg-gray-800 hover:bg-gray-900 text-white rounded-md"
                >
                  Checkout
                </button>
              </Link>
              <Link to="/">
                <button
                  type="button"
                  className="text-sm px-4 py-2.5 w-full font-semibold tracking-wide bg-transparent text-gray-800 border border-gray-300 rounded-md"
                >
                  Continue Shopping{" "}
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="md:col-span-2 space-y-4">
            <hr className="border-gray-300" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
