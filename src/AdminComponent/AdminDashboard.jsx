import React, { useState } from "react";
import AdminNavbar from "./AdminNavbar";
import UserManagement from "./UserManagement";
import ProductManagement from "./ProductManagement";
import OrderManagement from "./orderManagement";

const AdminDashboard = () => {
  const [activeComponent, setActiveComponent] = useState("productManagement");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); 
  const handleChange = (component) => {
    setActiveComponent(component);
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
      <button
        className="md:hidden bg-blue-500 text-white p-2 m-2 rounded"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        {isSidebarOpen ? "Hide Menu" : "Show Menu"}
      </button>

      <div
        className={`absolute md:relative z-10 ${
          isSidebarOpen ? "block" : "hidden"
        } md:block`}
      >
        <AdminNavbar handleChange={handleChange} />
      </div>

      <div className="flex-1 p-4 w-full overflow-auto">
        {activeComponent === "userManagement" && <UserManagement />}
        {activeComponent === "productManagement" && <ProductManagement />}
        {activeComponent === "orderManagement" && <OrderManagement />}
      </div>
    </div>
  );
};

export default AdminDashboard;
