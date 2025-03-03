import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { getUserOrder } from "../Redux/Actions/OrderActions/getUserOrderAction";
import MotionPath from "../Components/loader";
import ToastMessage from "../utils/ToastMessage";
import { OrderMessage } from "../utils/statusMessages";
import CancelOrderModal from "../Components/CancelOrderModal";
import { orderCancellation } from "../Redux/Actions/OrderActions/cancelOrderAction";

const AllOrdersPage = () => {
  const dispatch = useDispatch();
  const [openCancelOrderModal, setOpenCancelOrderModal] = useState(false);
  const [cancelOrderId, setCancelOrderId] = useState(null);
  const [showToast, setShowToast] = useState(null);

  const { orders, isLoading, isError } = useSelector(
    (state) => state.userOrders
  );

  const handleCancelOrder = () => {
    if (cancelOrderId) {
      dispatch(orderCancellation(cancelOrderId)).catch(() => {
        setShowToast(OrderMessage.NOT_FOUND);
      });
    dispatch(getUserOrder());
      setOpenCancelOrderModal(false);
    }
  };
  const handleOpenCancelOrderModal = (orderId) => {
    setCancelOrderId(orderId);
    setOpenCancelOrderModal(true);
  };

  const handleCloseModal = () => {
    setOpenCancelOrderModal(false);
    setCancelOrderId(null);
  };
  useEffect(() => {
    dispatch(getUserOrder());
  }, [dispatch]);

  if (isError) {
    showToast(<ToastMessage message={OrderMessage.NOT_FOUND} />);
  }
  return (
    <>
      <Navbar />
      <div className="w-screen flex justify-center items-center mt-6">
        <div className="px-8 py-4 shadow-lg rounded-2xl border w-[90%] max-w-4xl">
          <h2 className="text-3xl font-serif font-semibold text-center">
            Your Orders
          </h2>
        </div>
      </div>

      {isLoading ? (
        <div className="flex justify-center mt-6">
          <MotionPath />
        </div>
      ) : orders?.length === 0 ? (
        <p className="text-center mt-6 text-gray-500 text-lg">
          No orders found.
        </p>
      ) : (
        orders?.map((order) => (
          <div
            key={order?._id}
            className="w-screen flex justify-center items-center mt-6"
          >
            <div className="bg-white px-8 py-6 shadow-xl rounded-lg border w-[90%] max-w-4xl">
              <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center bg-gray-100 p-4 rounded-md shadow-sm">
                <div>
                  <p className="text-lg font-semibold">Order Details</p>
                  <p className="text-sm text-gray-600">
                    Order Placed:{" "}
                    <span className="font-medium">
                      {new Date(order.dateOrdered).toLocaleDateString()}
                    </span>
                  </p>
                  <p className="text-sm text-gray-600">
                    Order ID: <span className="font-medium">{order._id}</span>
                  </p>
                </div>
                <p className="text-lg font-bold text-gray-800">
                  Total: ₹{order.totalPrice}
                </p>
              </div>

              <div className="mt-4 bg-gray-50 p-4 rounded-md flex justify-between">
                <div>
                  <p className="text-gray-700 font-semibold">
                    Shipping Address:
                  </p>
                  <p className="text-gray-900 font-medium">
                    {order.shippingAddress1}
                    {order.shippingAddress2 &&
                      `, ${order.shippingAddress2}`}, {order.city},{" "}
                    {order.state}, {order.zip}, {order.country}
                  </p>
                </div>
                <div>
                  <p className="text-gray-700 font-semibold">Status:</p>
                  <p className="text-gray-900 font-medium">{order.status}</p>
                </div>
              </div>

              <div className="bg-gray-50 mt-4 p-4 rounded-md">
                <h2 className="text-lg font-semibold mb-3">Ordered Items:</h2>
                {order.orderItems?.map((item) => (
                  <div
                    key={item._id}
                    className="border-b last:border-b-0 py-3 flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-24 h-24 shrink-0 bg-gray-200 p-2 rounded-md">
                        <img
                          src={item.product.image}
                          alt={item.product.name}
                          className="w-full h-full object-contain rounded-md"
                        />
                      </div>

                      <div>
                        <p className="text-gray-800 font-medium text-lg">
                          {item.product.name}
                        </p>
                        <p className="text-gray-600 text-sm line-clamp-2">
                          {item.product.description}
                        </p>
                        <p className="text-gray-900 font-semibold mt-1">
                          Qty: {item.quantity}
                        </p>
                      </div>
                    </div>

                    <p className="text-gray-900 text-lg font-semibold">
                      ₹{item.product.price}
                    </p>
                  </div>
                ))}
                <div className="flex justify-end">
                  <button
                    onClick={() => handleOpenCancelOrderModal(order._id)}
                    className="mt-4 bg-gray-500 text-white px-4 py-3 text-lg lg:text-xl font-semibold rounded-xl hover:bg-opacity-90 transition"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))
      )}
      {openCancelOrderModal && (
        <CancelOrderModal
          onClose={handleCloseModal}
          onCancel={handleCancelOrder}
        />
      )}
    </>
  );
};

export default AllOrdersPage;
