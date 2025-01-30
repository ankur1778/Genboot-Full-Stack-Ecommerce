import React, { useState } from 'react';
import AdminNavbar from './AdminNavbar' 
import UserManagement from './UserManagement';
import ProductManagement from './ProductManagement';

const AdminDashboard = () => {
    const [activeComponent, setActiveComponent] = useState('productManagement')

    const handleChange = (component) => {
        setActiveComponent(component);
    };

    return (
        <div className="flex h-screen">
            <AdminNavbar handleChange={handleChange} />
            <div className="flex p-4">
                {activeComponent === 'userManagement' && <UserManagement />}
                {activeComponent === 'productManagement' && <ProductManagement />}
            </div>
        </div>
    );
};

export default AdminDashboard;
