import { combineReducers } from "redux";
import userReducer from "./loginReducer";
export const rootReducer = combineReducers({
    userReducer
})

export default rootReducer;