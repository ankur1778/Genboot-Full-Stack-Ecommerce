// import axios from 'axios';
// import { EDIT_USER, DELETE_USER, OPEN_MODAL, CLOSE_MODAL } from '../ActionsAdmin/EditModalActionTypes';

// export const UserAction = () => async (dispatch) => {
//   try {
//     const response = await axios.get('http://localhost:3100/admin/users');
//     dispatch({
//       type: 'SET_USERS'
//     });
//   } catch (error) {
//     dispatch({
//       type: 'SET_ERROR',
//       payload: error.message,
//     });
//   }
// };

// export const editUser = (userData) => async (dispatch) => {
//   try {
//     const response = await axios.put(`http://localhost:3100/admin/users/update/${userData.id}`, userData);
//     dispatch({
//       type: EDIT_USER
//     });
//   } catch (error) {
//     console.error('Error editing user', error);
//   }
// };

// export const deleteUser = (userId) => async (dispatch) => {
//   try {
//     await axios.delete(`http://localhost:3100/admin/users/delete/${userId}}`);
//     dispatch({
//       type: DELETE_USER,
//     });
//   } catch (error) {
//     console.error('Error deleting user', error);
//   }
// };

// export const openModal = () => {
//   return {
//     type: OPEN_MODAL
//   };
// };

// export const closeModal = () => {
//   return {
//     type: CLOSE_MODAL,
//   };
// };
