import { combineReducers } from "redux";
import changeTheNumber from "./upDownCounter";
import userManipulation from './UsersTable'
import calculation from './calculatorreducer'
const rootReducer=combineReducers({
    changeTheNumber,
    userManipulation,calculation


})

export default rootReducer
