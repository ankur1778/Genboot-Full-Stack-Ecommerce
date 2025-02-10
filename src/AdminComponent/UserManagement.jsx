import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import EditModal from "../AdminComponent/EditModal";
import image from "../Images/usermanagement.svg";
import EditImage from "../Images/Edit.svg";
import { UserAction } from "./ActionsAdmin/AllUsers/userAction";
import ToastMessage from "../utils/ToastMessage";
import { AdminMessage } from "../utils/statusMessages";
import MotionPath from "../Components/loader";
import Pagination from "../utils/Pagination";

const UserManagement = () => {
  const dispatch = useDispatch();
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const { users, totalUsers, isError, isLoading } = useSelector(
    (state) => state.getAllUsers
  );

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  if (isError) {
    <ToastMessage message={AdminMessage.CANT_FETCH_USERS} />;
  }

  const fields = ["name", "email", "phNo"];
  const cellClass = "px-3 py-4 text-sm";
  useEffect(() => {
    dispatch(UserAction(itemsPerPage, currentPage));
  }, [dispatch, currentPage]);

  const handleOpenEditModal = () => {
    setIsEditModalOpen(true);
  };

  const handleSave = () => {
    setIsEditModalOpen(false);
  };

  const handleClose = () => {
    setIsEditModalOpen(false);
  };

  return (
    <div className="bg-gray-100 min-h-screen p-4 md:p-8">
      <div className="bg-white flex flex-col md:flex-row justify-between my-4 shadow-md items-center rounded-md p-4">
        <div className="flex items-center">
          <img className="h-16 w-16 md:h-20 md:w-20" src={image} alt="" />
          <h4 className="font-semibold text-xl md:text-3xl ml-4">
            User Management
          </h4>
        </div>
      </div>

      <div className="border-2 border-gray-200 shadow-md rounded-md p-4 md:p-6 bg-white">
        <input
          type="text"
          placeholder="Search User"
          className="w-full border-2 h-10 md:h-12 rounded-lg px-2 mb-3"
        />

        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                {fields.map((field, index) => (
                  <th key={index} className="px-3 py-3">
                    {field.split(".")[0]}
                  </th>
                ))}
                <th className={cellClass}> ACTION</th>
              </tr>
            </thead>
            <tbody>
              {isLoading ? (
                <MotionPath />
              ) : (
                users?.map((user) => (
                  <tr key={user._id} className="border-b">
                    {fields.map((field, index) => {
                      const value = field
                        .split(".")
                        .reduce((a, key) => a?.[key], user);
                      return (
                        <td key={index} className={cellClass}>
                          {value}
                        </td>
                      );
                    })}
                    <td className={cellClass}>
                      <button onClick={() => handleOpenEditModal(user)}>
                        <img src={EditImage} alt="load" />
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
        <Pagination
          totalItems={totalUsers}
          itemsPerPage={itemsPerPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
        {isEditModalOpen && (
          <EditModal onClose={handleClose} onSave={handleSave} />
        )}
      </div>
    </div>
  );
};

export default UserManagement;
