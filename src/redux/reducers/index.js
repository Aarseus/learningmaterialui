import { combineReducers } from "redux";
import changeTheNumber from "./upDownCounter";
import manageUser from "./userList";

const rootReducer=combineReducers({
    changeTheNumber,
    manageUser


})

export default rootReducer
