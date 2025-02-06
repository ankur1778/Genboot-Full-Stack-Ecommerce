import React, { useEffect, useState } from 'react';
import Toast from './Toasts';

const ToastMessage = ({ message, type }) => {
  const [toastMessage, setToastMessage] = useState('');
  const [toastType, setToastType] = useState('');

  useEffect(() => {
    if (message) {
      setToastMessage(message);
      setToastType(type);

      // Remove the toast message after 3 seconds
      const timer = setTimeout(() => {
        setToastMessage('');
        setToastType('');
      }, 3000);

      return () => clearTimeout(timer); // Cleanup function
    }
  }, [message, type]);

  return (
    <>
      {toastMessage && <Toast message={toastMessage} type={toastType} />}
    </>
  );
};

export default ToastMessage;
