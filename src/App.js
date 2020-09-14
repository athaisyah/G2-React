import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";

import { Features, Login, Home } from "./components/main/_index";
import {
  CreateCustomer,
  TableCustomer,
  CreateProduct,
  TableProduct,
  CreateShipping,
  TableShipping,
  CreateStaff,
  TableStaff,
} from "./components/pages/_index";

import NavigationBar from "./components/Navbar";

// import Sidebar from "./components/Sidebar2";

function App() {
  return (
    <div>
      <Router>
        {/* <NavigationBar /> */}
        <Login />
        {/* <NavigationBar /> */}
        {/* <Home /> */}
        {/* <Features /> */}
        {/* <CreateCustomer /> */}
        {/* <TableCustomer /> */}

        {/* <CreateProduct /> */}
        {/* <TableProduct /> */}

        {/* <CreateShipping /> */}
        {/* <TableShipping /> */}

        {/* <CreateStaff /> */}
        {/* <TableStaff /> */}
      </Router>
    </div>
  );
}

export default App;
