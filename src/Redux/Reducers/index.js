import { combineReducers } from "redux";
import { userReducer } from "./loginReducer";
import { registerSlice } from "./registrationReducer";
import {userReducerAdmin} from "../../AdminComponent/ReducersAdmin/userReducerAdmin";
import HamburgerReducer from "./HamburgerReducer";
export const rootReducer = combineReducers({
    getAllUsers:userReducerAdmin,
    userReducer,
    registerSlice,
    hamburger: HamburgerReducer
})

export default rootReducer;