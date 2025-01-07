import { combineReducers } from "redux";
import { userReducer } from "./loginReducer";
import { registerSlice } from "./registrationReducer";
export const rootReducer = combineReducers({
    userReducer,
    registerSlice
})

export default rootReducer;