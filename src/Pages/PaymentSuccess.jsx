import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
const PaymentsSuccess = () => {
  const navigate = useNavigate();
  useEffect(() =>{
    setTimeout(() =>{
      navigate('/');
      localStorage.removeItem('cart')
    }, 5000)
  }, [navigate])
  return (
    <div>
      <img className='flex justify-center h-48 w-48 items-center' src='https://education.uoc.ac.in/images/ezgif.com-crop.gif' alt='Loading..' />
      <h1 className='text-lg text-green-700 font-serif font-bold flex justify-center items-center'>Payment Successfully Done</h1> 
    </div>
  );
}
export default PaymentsSuccess;