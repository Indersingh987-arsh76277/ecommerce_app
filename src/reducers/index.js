import { combineReducers } from "redux";
import auth from "./auth"
import getAllProducts from "./getAllProducts"

export default combineReducers({
    auth:auth,
    getAllProducts:getAllProducts
});