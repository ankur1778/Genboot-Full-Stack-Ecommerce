import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ToastMessage from "../utils/ToastMessage";
import { OrderMessage } from "../utils/statusMessages";
import EditImage from "../Images/Edit.svg";
import UpdateStatusModal from "./Modals/updateOrderStatusModal";
import Pagination from "../utils/Pagination";
import MotionPath from "../Components/loader";
import { UpdateOrderStatus } from "./Redux/ActionsAdmin/OrdersActions/updateOrderAction";
import { GetAllOrders } from "./Redux/ActionsAdmin/OrdersActions/orderAction";

const OrderManagement = () => {
  const dispatch = useDispatch();
  const { orders, totalOrders, isError, isLoading } = useSelector(
    (state) => state.getAllOrders
  );

  const [selectedOrder, setSelectedOrder] = useState(null);
  const cellClass = "px-6 py-4 border-b text-center";
  const fields = ["_id", "user.name", "totalPrice", "status"];
  const [currentPage, setCurrentPage] = useState(1);
  const ordersPerPage = 10;
  useEffect(() => {
    dispatch(GetAllOrders(ordersPerPage, currentPage));
  }, [dispatch, currentPage]);

  if (isError) {
    return <ToastMessage message={OrderMessage.NOT_FOUND} />;
  }

  const handleOpenEditModal = (order) => {
    setSelectedOrder(order);
  };

  const handleCloseModal = () => {
    setSelectedOrder(null);
  };

  const handleSaveStatus = async (status) => {
    const success = await dispatch(
      UpdateOrderStatus(selectedOrder._id, status)
    );
    if (success) {
      dispatch(GetAllOrders(10, 1));
    }
    handleCloseModal();
  };

  return (
    <div className="bg-gray-300 min-h-screen py-10 px-4 md:px-16">
      <div className="bg-white flex justify-between items-center shadow-lg rounded-lg p-6 mb-6 ">
        <div className="flex items-center">
          <img
            className="h-14 w-14"
            src="https://cdn-icons-png.flaticon.com/512/17035/17035655.png"
            alt="Order Icon"
          />
          <h4 className="font-bold text-3xl ml-4 text-gray-800">
            Order Management
          </h4>
        </div>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200">
        <div className="overflow-x-auto shadow-lg rounded-md">
          <table className="w-full text-sm text-gray-700">
            <thead className="bg-gray-300 text-gray-800 uppercase">
              <tr>
                <th className={cellClass}>Order ID</th>
                <th className={cellClass}>User Name</th>
                <th className={cellClass}>Total Price</th>
                <th className={cellClass}>Order Status</th>
                <th className={cellClass}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {isLoading ? (
                <tr>
                  <td
                    colSpan="5"
                    className="text-center py-4 font-semibold text-gray-600"
                  >
                    <MotionPath />
                  </td>
                </tr>
              ) : orders?.length > 0 ? (
                orders.map((order) => (
                  <tr key={order._id} className="hover:bg-gray-100 transition">
                    {fields.map((field, index) => {
                      const value = field
                        .split(".")
                        .reduce((a, key) => a?.[key], order);
                      return (
                        <td key={index} className={cellClass}>
                          {value}
                        </td>
                      );
                    })}
                    <td className={cellClass}>
                      <button
                        onClick={() => handleOpenEditModal(order)}
                        className="p-2 bg-blue-500 hover:bg-blue-700 text-white rounded-md shadow-md transition"
                      >
                        <img src={EditImage} alt="Edit" className="h-5" />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="5"
                    className="text-center py-4 text-gray-500 font-medium"
                  >
                    <ToastMessage message={OrderMessage.NOT_FOUND} />
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {selectedOrder && (
        <UpdateStatusModal
          order={selectedOrder}
          onClose={handleCloseModal}
          onSave={handleSaveStatus}
        />
      )}
      <Pagination
        totalItems={totalOrders}
        itemsPerPage={ordersPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default OrderManagement;
