import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import images from "../Images/usermanagement.svg";
import { UserAction } from "./ActionsAdmin/userAction";
import EditModal from "./EditModal";
import { closeModal, deleteUser, editUser, openModal } from "./ActionsAdmin/EditModalAction";

const UserManagement = () => {
  const dispatch = useDispatch();
  const { users, isError, isLoading,  isModalOpen, selectedUser } = useSelector(
    (state) => state.getAllUsers
  );

  console.log('isModalopen', isModalOpen);
  console.log('selecteduser', selectedUser);
  
  
 
  useEffect(() => {
    dispatch(UserAction());
  }, [dispatch]);

  const handleEdit = (user)=>{
    dispatch(openModal(user))
  }

  const handleModalClose = () => {
    dispatch(closeModal());
  };

  const handleSave = (userData) => {
    dispatch(editUser(userData)); 
    handleModalClose();
  };

  const handleDelete = (userId) => {
    dispatch(deleteUser(userId)); 
    handleModalClose(); 
  };
 
  return (
    <div className="bg-[#C1BAA1] h-screen border-2 border-neutral-100">
      <div className="bg-white flex my-7 shadow-md items-center rounded-md p-3 mx-16">
        <img className="h-16 w-16" src={images} alt="Load" />
        <h4 className="font-semibold text-4xl mb-1">User Management</h4>
      </div>
      {isLoading && (
        <div className="flex justify-center items-center">
          <div className="spinner-border animate-spin border-t-4 border-blue-600 rounded-full w-8 h-8"></div>
        </div>
      )}
      {isError && <div className="text-red-500">{isError}</div>}{""}
      <div className="border-2 border-gray-200 shadow-md rounded-md p-6 bg-white mx-16">
        <input
          type="text"
          placeholder="Search"
          className="w-full border-2 h-12 rounded-lg px-2"
        />
        <div className="relative overflow-x-auto my-3">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-10 py-3">
                  User Name
                </th>
                <th scope="col" className="px-20 py-3">
                  Email
                </th>
                <th scope="col" className="px-20 py-3">
                  Ph. No.
                </th>
                <th scope="col" className="px-20 py-3">
                  Edit
                </th>
              </tr>
            </thead>
            <tbody>
              {users?.length > 0 ? (
                users.map((user) => (
                  <tr key={user.id}>
                    <td className="px-10 py-3">{user?.name}</td>
                    <td className="px-20 py-3">{user?.email}</td>
                    <td className="px-20 py-3">{user?.phNo}</td>
                    <td className="px-20 py-3">
                    <button onClick={() => handleEdit(user)}>Edit</button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="text-center py-3">
                    No users found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      {isModalOpen &&  selectedUser && (
        <EditModal
          isOpen={isModalOpen}
          onClose={handleModalClose}
          user={ selectedUser}
          onEdit={handleSave}
          onDelete={handleDelete}
        />
      )}
    </div>
  );
};
 
export default UserManagement;