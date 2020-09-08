import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import { Navbar, Nav } from "react-bootstrap";

import {
  AddEmployee,
  Assign,
  Department,
  ListEmployee,
  Login,
  Resume,
  LandingPage,
  Register,
  Show,
  Create,
  Edit,
} from "../../page";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  menuBar = () => {
    if (this.props.statusLogin === true) {
      return (
        <div>
          <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#">Student App</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link>
                <Link to="/student">Student List</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/add-student">Add Student</Link>
              </Nav.Link>
              {/* <Nav.Link>
                <Link to="/landingpage">Home</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/sp_department">Department</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/sp_addEmployee">Add Employee</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/sp_listEmployee">List of Employee</Link>
              </Nav.Link> */}
              {/* <Nav.Link>
                <Link to="/assign">Assign</Link>
              </Nav.Link> */}
              {/* <Nav.Link>
                <Link to="/resume">Resume</Link>
              </Nav.Link> */}
              <Nav.Link>Logout</Nav.Link>
            </Nav>
          </Navbar>
        </div>
      );
    } else {
      return (
        <div>
          <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#">Student Apps</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link></Nav.Link>
              <Nav.Link href="/login">Login</Nav.Link>

              <Nav.Link></Nav.Link>
              <Nav.Link href="/register">Register</Nav.Link>
            </Nav>
          </Navbar>
        </div>
      );
    }
  };

  render() {
    return (
      <div>
        {this.menuBar()}
        <div>
          <Switch>
            <Route exact path="/login">
              <Login />
            </Route>

            <Route exact path="/register">
              <Register />
            </Route>

            <Route path="/student">
              <Show />
            </Route>

            <Route path="/add-student">
              <Create />
            </Route>

            <Route path="/edit">
              <Edit />
            </Route>
            {/*             
            <Route path="/landingpage">
              <LandingPage />
            </Route> */}

            {/* <Route path="/assign">
              <Assign />
            </Route> */}

            {/* <Route path="/sp_department">
              <Department />
            </Route>

            <Route path="/sp_addEmployee">
              <AddEmployee />
            </Route>

            <Route path="/sp_listEmployee">
              <ListEmployee />
            </Route> */}

            {/* <Route path="/resume">
              <Resume />
            </Route> */}
          </Switch>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  statusLogin: state.navbar.isLogin,
});

export default connect(mapStateToProps)(NavBar);
