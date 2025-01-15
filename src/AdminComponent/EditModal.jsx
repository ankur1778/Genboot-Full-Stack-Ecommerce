import React, { useEffect, useState } from 'react';
 
function EditModal({ isOpen, onClose, user, onEdit, onDelete }) {
  const[userData, setUserData] = useState({
    name: " ",
    email: " ",
    phNo: " ",
  });
  useEffect(() => {
    if (isOpen && user) {
      setUserData({ name: user.name, email: user.email, phone: user.phNo });
    }
  }, [isOpen, user]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSave = ()=>{
    onEdit(userData)
  }
  const handleDelete =()=>{
    onDelete(user.id)
  }
  if(!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-96">
        <h2 className="text-lg font-semibold mb-4">Edit Page</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type='text'
            value={userData.name}
            onChange={handleChange}
            placeholder="Edit the UserName"
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type='text'
            value={userData.email}
            onChange={handleChange}
            placeholder="Edit Your Emailid"
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Ph. No.</label>
          <input
            type='number'
            value={userData.phNo}
            onChange={handleChange}
            placeholder="Edit the PhoneNumber"
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="flex justify-end mt-4">
          <button onClick={handleDelete} className="px-4 py-2 bg-red-700 text-white rounded-md hover:bg-[#F0F0D7] mr-2">Delete</button>
          <button onClick={handleSave} className="px-4 py-2 bg-[#074799] text-white rounded-md hover:bg-[#A5BFCC]">Update</button>
          <button onClick={onClose} className="px-4 py-2 bg-[#16C47F] text-white rounded-md hover:bg-[#A9C46C]">Cancel</button>
        </div>
      </div>
    </div>
  );
}
 
export default EditModal;