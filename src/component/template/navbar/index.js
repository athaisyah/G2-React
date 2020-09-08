import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import { Home, Login, Register } from "../../../page";
import { Nav, Navbar } from "react-bootstrap";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false,
      users: [],
    };
  }

  changeIsLogin = () => {
    this.setState({
      isLogin: !this.state.isLogin,
    });
  };

  addUser = (objUser) => {
    let lastUsers = this.state.users;
    lastUsers.push(objUser);

    this.setState({
      users: lastUsers,
    });
  };

  adminMenu = () => {
    if (this.state.isLogin) {
      return <></>;
    }

    return (
      <>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </>
    );
  };

  render() {
    return (
      <>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand>REACT JS [Student App]</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link>
              <Link to="/">Home</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/login">Login</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/register">Register</Link>
            </Nav.Link>
          </Nav>
        </Navbar>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login
              statusLogin={this.state.isLogin}
              changeStatusLogin={this.changeIsLogin}
              userList={this.state.users}
            />
          </Route>
          <Route exact path="/register">
            <Register
              statusLogin={this.state.isLogin}
              changeStatusLogin={this.changeIsLogin}
              registerUSer={this.addUser}
            />
          </Route>
        </Switch>
      </>
    );
  }
}

export default NavBar;
