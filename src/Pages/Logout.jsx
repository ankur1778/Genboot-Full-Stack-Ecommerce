import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const LOGOUT = 'LOGOUT';
const logout = () => {
  return (dispatch) => {
    Cookies.remove('token'); 
    dispatch({ type: LOGOUT });
  };
};

const initialState = {
  userData: null,
  loggedIn: !!Cookies.get('token'),
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGOUT:
      return {
        ...state,
        userData: null,
        loggedIn: false,
      };
    default:
      return state;
  }
};

const Logout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(logout()); 
    setTimeout(() => {
      navigate('/login');
    }, 2000);
  }, [dispatch, navigate]);

  return (
    <div>
        <button>Logout</button>
    </div>
  );
};

export default Logout;
