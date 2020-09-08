import { combineReducers } from "redux";
import AuthReducer from "./auth";
import loginReducer from "./login/login";
import navbarReducer from "./navbar/navbar";

const AllReducers = combineReducers({
  navbar: navbarReducer,
  login: loginReducer,
  auth: AuthReducer,
});

export default AllReducers;
