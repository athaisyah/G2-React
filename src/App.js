import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { NavBar } from "./component/template";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <NavBar />
        </Router>
      </>
    );
  }
}
export default App;
