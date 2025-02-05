import React from 'react';

const Toast = ({ message, type }) => {
  if (!message) return null;

  const toastStyles = type === 'success' 
    ? 'bg-green-500 text-white' 
    : 'bg-red-500 text-white';

  return (
    <div className={`fixed top-4 right-4 p-4 rounded shadow-lg ${toastStyles} transition-opacity duration-300`}>
      {message}
    </div>
  );
};

export default Toast;
