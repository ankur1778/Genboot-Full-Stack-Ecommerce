import { combineReducers } from "redux";
import { userReducer } from "./loginReducer";
import { registerSlice } from "./registrationReducer";
import {userReducerAdmin} from "../../AdminComponent/ReducersAdmin/userReducerAdmin";
export const rootReducer = combineReducers({
    getAllUsers:userReducerAdmin,
    userReducer,
    registerSlice
})

export default rootReducer;