import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UserAction } from "./ActionsAdmin/userAction";
import EditModal from "../AdminComponent/EditModal";
import image from '../Images/usermanagement.svg';
import EditImage from '../Images/Edit.svg'

const UserManagement = () => {
  const dispatch = useDispatch();
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)
  const { users, isError, isLoading } = useSelector(
    (state) => state.getAllUsers
  );

  useEffect(() => {
    dispatch(UserAction());
  }, [dispatch]);

  const handleOpenEditModal = () =>{
    setIsEditModalOpen(true)
  }

  const handleSave = ()=>{
    setIsEditModalOpen(false)
  }

  const handleClose = ()=>{
    setIsEditModalOpen(false)
  }


  return (
    <div className="bg-[#C1BAA1] h-screen border-2 border-neutral-100">
      <div className="bg-white flex my-7 shadow-md items-center rounded-md p-3 mx-16">
        <img className='h-20 w-20' src={image} alt="load"/>
        <h4 className="font-semibold text-4xl mb-1">User Management</h4>
      </div>
      {isLoading && (
        <div className="flex justify-center items-center">
          <div className="spinner-border animate-spin border-t-4 border-blue-600 rounded-full w-8 h-8"></div>
        </div>
      )}
      {isError && <div className="text-red-500">{isError}</div>}
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
                  Action
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
                      <button onClick={() => handleOpenEditModal(user)}>
                      <img src={EditImage} alt="load"/>
                      </button>
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
      {isEditModalOpen && (
        <EditModal 
          onClose={handleClose}
          onSave={handleSave}
        />
      )}
    </div>
  );
};

export default UserManagement;
