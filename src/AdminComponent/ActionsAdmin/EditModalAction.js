// import { EDIT_USER, DELETE_USER, CLOSE_MODAL, OPEN_MODAL } from "./EditModalActionTypes";

// export const editUser = (userData) => {
//     return {
//       type: EDIT_USER,
//       payload: userData,
//     };
//   };
  
//   export const deleteUser = (userId) => {
//     return {
//       type: DELETE_USER,
//       payload: userId,
//     };
//   };
  
//   export const openModal = (user) => {
//     return {
//       type: OPEN_MODAL,
//       payload: user,
//     };
//   };
  
//   export const closeModal = () => {
//     return {
//       type: CLOSE_MODAL,
//     };
//   };


import axios from 'axios';
import { EDIT_USER, DELETE_USER, OPEN_MODAL, CLOSE_MODAL } from "./EditModalActionTypes";

export const UserAction = () => async (dispatch) => {
  try {
    const response = await axios.get('http://localhost:3100/admin/users'); 
    dispatch({
      type: 'SET_USERS',
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: 'SET_ERROR',
      payload: error.message,
    });
  }
};

export const editUser = (userData) => async (dispatch) => {
  try {
    const response = await axios.put(`http://localhost:3100/admin/users${userData.id}`, userData); 
    dispatch({
      type: EDIT_USER,
      payload: response.data, 
    });
  } catch (error) {
    console.error('Error editing user', error);
  }
};

export const deleteUser = (userId) => async (dispatch) => {
  try {
    await axios.delete(`http://localhost:3100/admin/users${userId}`);
    dispatch({
      type: DELETE_USER,
      payload: userId,
    });
  } catch (error) {
    console.error('Error deleting user', error);
  }
};

export const openModal = (user) => {
  return {
    type: OPEN_MODAL,
    payload: user,
  };
};

export const closeModal = () => {
  return {
    type: CLOSE_MODAL,
  };
};
