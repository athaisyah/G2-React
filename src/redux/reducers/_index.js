import { combineReducers } from "redux";

import loginReducer from "./LoginReducer";
import navbarReducer from "./NavbarReducer";

const AllReducers = combineReducers({
  navbar: navbarReducer,
  login: loginReducer,
});

export default AllReducers;
