import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetAllOrders } from "./ActionsAdmin/AllOrders/orderAction";
import filter from "../Images/sort.svg"; 

const OrderManagement = () => {
  const dispatch = useDispatch();
  const { orders, isError, isLoading } = useSelector(
    (state) => state.getAllOrders
  );

  useEffect(() => {
    dispatch(GetAllOrders());
  }, [dispatch]);

  return (
    <div className="bg-gray-400 h-screen border-2 border-neutral-100 ">
      <div className="bg-white flex justify-between my-7 shadow-md items-center rounded-md p-1 mx-16">
        <div className="flex">
          <img className="h-20 w-20" src='https://cdn-icons-png.flaticon.com/512/17035/17035655.png' alt="Order Icon" />
          <h4 className="font-semibold text-3xl my-5">Order Management</h4>
        </div>
        <div className="flex justify-end me-6 items-center cursor-pointer">
          <img className="h-[1.70rem]" src={filter} alt="Sort Icon" />
          <h4 className="font-semibold text-xl mx-1">Sort</h4>
        </div>
      </div>

      <div className="border-2 border-gray-200 shadow-md rounded-md p-6 bg-white mx-16">
        <input
          type="text"
          placeholder="Search Orders"
          className="w-full border-2 h-12 rounded-lg px-2"
        />
        <div className="relative overflow-x-auto my-3">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-10 py-3">
                  Order ID
                </th>
                <th scope="col" className="px-10 py-3">
                  User Name
                </th>
                <th scope="col" className="px-10 py-3">
                  Total Price
                </th>
                <th scope="col" className="px-10 py-3">
                  Order Status
                </th>
                <th scope="col" className="px-10 py-3">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {isLoading ? (
                <tr>
                  <td colSpan="5" className="text-center py-3">Loading...</td>
                </tr>
              ) : isError ? (
                <tr>
                  <td colSpan="5" className="text-center py-3 text-red-500">Error loading orders.</td>
                </tr>
              ) : Array.isArray(orders) && orders.length > 0 ? (
                orders.map((order) => (
                  <tr key={order._id}>
                    <td className="px-3 py-3">{order._id}</td>
                    <td className="px-3 py-3">{order.user?.name}</td>
                    <td className="px-3 py-3">{order.totalPrice}</td>
                    <td className="px-3 py-3">{order.status}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="text-center py-3">No orders found</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OrderManagement;