import React, { useState } from "react";

const UpdateStatusModal = ({ order, onClose, onSave }) => {
  const [status, setStatus] = useState(order?.status || "");

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-96">
        <div className="flex justify-between items-center border-b-2 pb-2">
          <h2 className="text-lg font-semibold">Update Order Status</h2>
          <button
            className="hover:bg-red-600 hover:text-white p-2 rounded-xl cursor-pointer"
            onClick={onClose}
          >
            ✖
          </button>
        </div>
        <div className="mt-4">
          <p>
            <strong>Order ID:</strong> {order?._id}
          </p>
          <p>
            <strong>User:</strong> {order?.user?.name}
          </p>
          <p>
            <strong>Total:</strong> ${order?.totalPrice}
          </p>
        </div>
        
        <div className="mt-4">
          <label className="block font-semibold">Update Status:</label>
          <select
            className="w-full border-2 rounded-lg px-2 py-1"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="Pending">Pending</option>
            <option value="Shipped">Shipped</option>
            <option value="Delivered">Delivered</option>
            <option value="Cancelled">Cancelled</option>
          </select>
        </div>

        <div className="flex justify-end mt-4">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 mr-2"
          >
            Cancel
          </button>
          <button
            onClick={() => onSave(status)}
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateStatusModal;
