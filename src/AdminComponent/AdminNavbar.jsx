import React from 'react';
import logo from '../Images/logo.png'

const AdminNavbar = ({handleChange}) => {
    return (
        <div>
            <nav className='bg-white flex flex-col p-3 h-screen w-64 font-bold'>
                <div className='flex justify-center'>
                    <img className='h-30 w-32' src={logo} alt='load' />
                </div>
                <div className='mt-6'>
                    <ul className='space-y-4'>
                        <li className='px-4 py-2 text-lg cursor-pointer hover:bg-gray-200 hover:text-red-800 active:text-red-800 rounded-lg font-serif' onClick={()=>handleChange('userManagement')}>
                            User Management
                        </li>
                        <li className='px-4 py-2 text-lg cursor-pointer hover:bg-gray-200 hover:text-red-800  rounded-lg font-serif' onClick={()=>handleChange('productManagement')}>
                            Product Management
                        </li>
                        <li className='px-4 py-2 text-lg cursor-pointer hover:bg-gray-200 hover:text-red-800  rounded-lg font-serif'>
                            Profile
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default AdminNavbar;
