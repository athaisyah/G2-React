import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import { Nav, Navbar, Form, Button, FormControl } from "react-bootstrap";

import { Login, Home, Features } from "./main/_index";
import {
  CreateCustomer,
  TableCustomer,
  CreateProduct,
  TableProduct,
  CreateShipping,
  TableShipping,
  CreateStaff,
  TableStaff,
  parentCreateStaff,
} from "./pages/_index";

class NavigationBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  menuBar = () => {
    if (this.props.statusLogin === true) {
      return (
        <div>
          <Navbar bg="light" variant="light">
            <Navbar.Brand>POS App</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link>
                <Link to="/home">Home</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/features">Features</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/pricing">Pricing</Link>
              </Nav.Link>
            </Nav>
            {/* <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
              <Button variant="outline-primary">Search</Button>
            </Form> */}
            <Button className="ml-sm-2" variant="outline-primary">
              <Nav.Link>
                <i class="fas fa-sign-out-alt"></i>&nbsp;Logout
              </Nav.Link>
            </Button>
          </Navbar>
        </div>
      );
    } else {
      return <div>{/* <Login /> */}</div>;
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

            <Route exact path="/home">
              <Home />
            </Route>

            <Route exact path="/features">
              <Features />
            </Route>
            {/* SHIPPING */}
            <Route path="/shipping">
              <CreateShipping />
            </Route>
            <Route path="/shipping-list">
              <TableShipping />
            </Route>
            {/* PRODUCT */}
            <Route path="/product">
              <CreateProduct />
            </Route>
            <Route path="/product-list">
              <TableProduct />
            </Route>
            {/* CUSTOMER */}
            <Route path="/customer">
              <CreateCustomer />
            </Route>
            <Route path="/customer-list">
              <TableCustomer />
            </Route>
            {/* STAFF */}
            <Route path="/staff">
              <CreateStaff />
            </Route>
            <Route path="/staff-list">
              <TableStaff />
            </Route>
          </Switch>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  statusLogin: state.navbar.isLogin,
});

export default connect(mapStateToProps)(NavigationBar);
