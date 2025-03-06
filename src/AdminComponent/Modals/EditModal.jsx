import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { DeleteUser } from "../Redux/ActionsAdmin/AllUsers/deleteUserAction";
import { updateUserDetails } from "../Redux/ActionsAdmin/AllUsers/updateUserDetailsAction";
import { UserAction } from "../Redux/ActionsAdmin/AllUsers/userAction";

function EditUserModal({ user, onClose }) {
  const dispatch = useDispatch();

  const [userName, setUserName] = useState(user?.name || "");
  const [phNo, setPhNo] = useState(user?.phNo || "");
  const [email, setEmail] = useState(user?.email || "");
  const [disabled, setDisabled] = useState(user?.disabled);

  const handleSave = async () => {
    const updatedUser = { name: userName, phNo, email, disabled };
    const success = await dispatch(updateUserDetails(user._id, updatedUser));

    if (success) {
      await dispatch(UserAction(10, 1, "", "name:asc"));
      onClose();
    }
  };

  const handleDeleteUser = async (userId) => {
    const success = await dispatch(DeleteUser(userId));
    if (success) {
      await dispatch(UserAction(10, 1, "", "name:asc"));
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-96">
        <div className="flex justify-between items-center border-b-2 pb-2">
          <h2 className="text-lg font-semibold">Edit User Details</h2>
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
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Edit User Name"
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Phone Number:
          </label>
          <input
            type="text"
            value={phNo}
            onChange={(e) => setPhNo(e.target.value)}
            placeholder="Edit Phone Number"
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Email Id:
          </label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Edit Email Id"
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          />
        </div>
        <div className="flex items-center justify-between mt-4">
          <span className="text-sm font-medium text-gray-700">
            Disable User:
          </span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={disabled}
              onChange={() => setDisabled(!disabled)}
              className="sr-only peer"
            />
            <div className="w-10 h-4 bg-gray-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300 rounded-full peer peer-checked:bg-blue-600 transition-colors duration-300">
              <div
                className={`w-5 h-4 bg-white rounded-full shadow-sm transform transition-transform duration-300 ${
                  disabled ? "translate-x-6" : "translate-x-1"
                }`}
              ></div>
            </div>
          </label>
        </div>

        <div className="flex justify-end mt-4">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 mr-2"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          >
            Save
          </button>
          <button
            onClick={() => handleDeleteUser(user._id)}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 ml-2"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditUserModal;
