
import React, { useState } from 'react';
import Toast from './Toasts';

const ToastMessage = () => {
  const [toastMessage, setToastMessage] = useState('');
  const [toastType, setToastType] = useState('');

  const showToast = (message, type) => {
    setToastMessage(message);
    setToastType(type);

    // Remove the toast message after 3 seconds
    setTimeout(() => {
      setToastMessage('');
      setToastType('');
    }, 3000);
  };

  return (
    <div className="p-4">
      <button
        onClick={() => showToast('Operation was successful!', 'success')}
        className="m-2 p-2 bg-blue-500 text-white rounded"
      >
        Show Success Toast
      </button>
      <button
        onClick={() => showToast('Operation failed!', 'error')}
        className="m-2 p-2 bg-blue-500 text-white rounded"
      >
        Show Error Toast
      </button>

      {/* Show the Toast component if a message exists */}
      {toastMessage && <Toast message={toastMessage} type={toastType} />}
    </div>
  );
};

export default ToastMessage;