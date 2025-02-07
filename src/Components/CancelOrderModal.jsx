import React from "react";

function CancelOrderModal({ onClose, onCancel }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-96">
        <h2 className="text-lg font-semibold mb-4">Confirm Cancel Order</h2>
        <p>Are you sure you want to Cancel this order?</p>
        <div className="flex justify-end mt-4">
          <button
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 mr-2"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            onClick={onCancel}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default CancelOrderModal;
