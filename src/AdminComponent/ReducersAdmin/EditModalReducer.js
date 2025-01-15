import { EDIT_USER, DELETE_USER, OPEN_MODAL, CLOSE_MODAL } from "../ActionsAdmin/EditModalActionTypes";

const initialState ={
  users: [],
  isModalOpen: false,
  selectedUser: null,
  isError: null,
  isloading: false,
}

const EditModalReducer =(state = initialState, action) =>{
    switch(action.type){
        case EDIT_USER:
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.payload.id ? action.payload : user
        ),
      };

    case DELETE_USER:
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.payload),
      };

    case OPEN_MODAL:
      return { ...state, isModalOpen: true, selectedUser: action.payload };

    case CLOSE_MODAL:
      return { ...state, isModalOpen: false, selectedUser: null };

    default:
      return state;
  }
};

export default EditModalReducer;