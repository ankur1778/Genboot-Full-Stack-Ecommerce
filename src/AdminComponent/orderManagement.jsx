import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetAllOrders } from "./ActionsAdmin/OrdersActions/orderAction";
import filterIcon from "../Images/sort.svg";
import ToastMessage from "../utils/ToastMessage";
import { OrderMessage } from "../utils/statusMessages";
import EditImage from "../Images/Edit.svg";
import UpdateStatusModal from "./updateOrderStatusModal";
import { UpdateOrderStatus } from "./ActionsAdmin/OrdersActions/updateOrderAction";

const OrderManagement = () => {
  const dispatch = useDispatch();
  const { orders, isError, isLoading } = useSelector(
    (state) => state.getAllOrders
  );
  const [selectedOrder, setSelectedOrder] = useState(null);
  const cellClass = "px-6 py-3";
  const fields = ["_id", "user.name", "totalPrice", "status"];
  useEffect(() => {
    dispatch(GetAllOrders());
  }, [dispatch]);

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
      dispatch(GetAllOrders());
    }
    handleCloseModal();
  };

  return (
    <div className="bg-gray-400 min-h-screen border-2 border-neutral-100">
      <div className="bg-white flex justify-between my-7 shadow-md items-center rounded-md p-4 mx-16">
        <div className="flex items-center">
          <img
            className="h-16 w-16"
            src="https://cdn-icons-png.flaticon.com/512/17035/17035655.png"
            alt="Order Icon"
          />
          <h4 className="font-semibold text-3xl ml-4">Order Management</h4>
        </div>
        <div className="flex items-center cursor-pointer">
          <img className="h-6" src={filterIcon} alt="Sort Icon" />
          <h4 className="font-semibold text-xl ml-2">Sort</h4>
        </div>
      </div>

      <div className="border-2 border-gray-200 shadow-md rounded-md p-6 bg-white mx-16">
        <input
          type="text"
          placeholder="Search Orders"
          className="w-full border-2 h-12 rounded-lg px-2"
        />

        <div className="relative overflow-x-auto my-3">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th className="px-6 py-3">Order ID</th>
                <th className="px-6 py-3">User Name</th>
                <th className="px-6 py-3">Total Price</th>
                <th className="px-6 py-3">Order Status</th>
                <th className="px-6 py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {isLoading ? (
                <tr>
                  <td colSpan="5" className="text-center py-3">
                    Loading...
                  </td>
                </tr>
              ) : orders?.length > 0 ? (
                orders.map((order) => (
                  <tr key={order._id} className="border-b">
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
                    <td className="px-6 py-3">
                      <button onClick={() => handleOpenEditModal(order)}>
                        <img src={EditImage} alt="Edit" className="h-5" />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="text-center py-3">
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
    </div>
  );
};

export default OrderManagement;
