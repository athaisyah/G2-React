import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "react-mdl/extra/material.css";
import "react-mdl/extra/material.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";

import { createStore } from "redux";
import { Provider } from "react-redux";
import employeeReducers from "./reducers/employeeReducers";

if (localStorage.getItem("employees") == null)
  localStorage.setItem("employees", JSON.stringify([]));
let initialState = {
  currentIndex: -1,
  list: JSON.parse(localStorage.getItem("employees")),
};

const store = createStore(employeeReducers, initialState);

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);

serviceWorker.unregister();
