import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../Components/Login';
import Registration from '../Components/Registration';
import Home from '../Components/Home';

const Main = () => {
  return (
    <div>
        <BrowserRouter>
        <Routes>
            <Route path='/login' element={<Login/>}/>
            <Route path='/' element={<Home/>}/>
            <Route path='/register' element={<Registration/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default Main;
