import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import EditModal from "./Modals/EditModal";
import image from "../Images/usermanagement.svg";
import EditImage from "../Images/Edit.svg";
import ToastMessage from "../utils/ToastMessage";
import { AdminMessage } from "../utils/statusMessages";
import MotionPath from "../Components/loader";
import Pagination from "../utils/Pagination";
import { debounce } from "lodash";
import { UserAction } from "./Redux/ActionsAdmin/AllUsers/userAction";
import AddUserModal from "./Modals/RegisterUserModal";

const UserManagement = () => {
  const dispatch = useDispatch();
  const [selectedUser, setSelectedUser] = useState(null);
  const [isRegisterUserModalOpen, setIsRegisterUserModalOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [sort, setSort] = useState("name");
  const [sortOrder, setSortOrder] = useState("asc");

  const itemsPerPage = 10;
  const { users, totalUsers, isError, isLoading } = useSelector(
    (state) => state.getAllUsers
  );

  const handleSort = (field) => {
    setSortOrder(sort === field && sortOrder === "asc" ? "desc" : "asc");
    setSort(field);
  };

  const searchHandler = debounce((e) => {
    setSearch(e.target.value);
  }, 500);

  useEffect(() => {
    dispatch(
      UserAction(itemsPerPage, currentPage, search, `${sort}:${sortOrder}`)
    );
  }, [dispatch, currentPage, search, sort, sortOrder]);

  if (isError) {
    return <ToastMessage message={AdminMessage.CANT_FETCH_USERS} />;
  }

  const fields = ["name", "email", "phNo", "disabled"];
  const cellClass = "px-3 py-4 text-sm";

  const handleOpenEditModal = (user) => {
    setSelectedUser(user);
  };

  const handleOpenRegisterUserModal = () => {
    setIsRegisterUserModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedUser(null);
    setIsRegisterUserModalOpen(false);
  };

  return (
    <div className="bg-gray-100 min-h-screen p-4 md:p-8">
      <div className="bg-white flex flex-col md:flex-row justify-between my-4 shadow-md items-center rounded-md p-4">
        <div className="flex items-center">
          <img className="h-16 w-16 md:h-20 md:w-20" src={image} alt="Users" />
          <h4 className="font-semibold text-xl md:text-3xl ml-4">
            User Management
          </h4>
        </div>
        <div>
          <button
            onClick={handleOpenRegisterUserModal}
            className="border-2 p-2 bg-gray-100 rounded-lg font-bold"
          >
            Add New User
          </button>
        </div>
      </div>

      <div className="border-2 border-gray-200 shadow-md rounded-md p-4 md:p-6 bg-white">
        <input
          type="text"
          placeholder="Search User"
          className="w-full border-2 h-10 md:h-12 rounded-lg px-2 mb-3"
          onChange={searchHandler}
        />

        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                {fields.map((field, index) => (
                  <th
                    key={index}
                    className="px-3 py-3 cursor-pointer"
                    onClick={() => handleSort(field)}
                  >
                    {field.split(".")[0]}{" "}
                    {sort === field ? (sortOrder === "asc" ? "🔼" : "🔽") : ""}
                  </th>
                ))}
                <th className={cellClass}>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {isLoading ? (
                <tr>
                  <td colSpan={fields.length + 1} className="text-center py-4">
                    <MotionPath />
                  </td>
                </tr>
              ) : (
                users?.map((user) => (
                  <tr
                    key={user._id}
                    className="hover:bg-gray-100 transition border-b"
                  >
                    {fields.map((field, index) => {
                      const value = field
                        .split(".")
                        .reduce((a, key) => a?.[key], user);
                      return (
                        <td key={index} className={cellClass}>
                          {value !== undefined ? String(value) : "N/A"}
                        </td>
                      );
                    })}
                    <td className={cellClass}>
                      <button onClick={() => handleOpenEditModal(user)}>
                        <img src={EditImage} alt="Edit" />
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

        {selectedUser && (
          <EditModal user={selectedUser} onClose={handleCloseModal} />
        )}
        {isRegisterUserModalOpen && <AddUserModal onClose={handleCloseModal} />}
      </div>
    </div>
  );
};

export default UserManagement;
