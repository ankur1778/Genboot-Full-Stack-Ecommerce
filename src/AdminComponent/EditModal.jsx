import React from "react";
function EditModal({
  UserName,
  phNo,
  email,
  onemailChange,
  onphNochange,
  onUserNameChange,
  onClose,
  onSave,
}) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-96">
        <div className="flex justify-between items-center border-b-2">
          <h2 className="text-lg font-semibold ">Edit UserDetails</h2>
          <h1
            className="hover:bg-red-600 hover:text-white p-2 rounded-xl cursor-pointer"
            onClick={onClose}
          >
            x
          </h1>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mt-4">
            Name:
          </label>
          <input
            type="text"
            value={UserName}
            onChange={onUserNameChange}
            placeholder="Edit User Name"
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Phone Number:
          </label>
          <input
            type="text"
            value={phNo}
            onChange={onphNochange}
            placeholder="Edit Phone Number"
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Email Id:
          </label>
          <input
            type="text"
            value={email}
            onChange={onemailChange}
            placeholder="Edit Email Id"
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="flex justify-end mt-4">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 mr-2"
          >
            Cancel
          </button>
          <button
            onClick={onSave}
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditModal;
