import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { NavBar } from "./component/template/index";

function App() {
  return (
    <div className="demo-big-content">
      <Router>
        <NavBar />
      </Router>
    </div>
  );
}

export default App;
