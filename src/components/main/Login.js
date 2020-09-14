import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import NavigationBar from "../Navbar";
import { FirebaseContext } from "../../config/firebase";

import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
// import { inputAction, loginAction } from "../../redux/actions/_index";
import { setLogin, setInput } from "../../redux/actions/_index";

// import setLogin from "../../redux/actions/NavbarAction";
// import setInput from "../../redux/actions/LoginAction";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  setValue = async (e) => {
    await this.setState({
      [e.name]: e.value,
    });
    this.passData();
  };

  passData = () => {
    const { email, password } = this.state;
    this.props.input({ email, password });
  };

  isLogin = (e) => {
    e.preventDefault();

    if (
      this.props.emailInput === "admin@pos.com" &&
      this.props.passwordInput === "admin"
    ) {
      return this.props.changeStatusLogin();
    } else {
      alert("Invalid email or password!!");
    }
  };

  checkFirebase = () => {
    return () => {
      return <h1>Firebase Connected!</h1>;
    };
  };

  render() {
    if (this.props.statusLogin) return <NavigationBar />;

    return (
      <div>
        <div>
          <FirebaseContext.Consumer>
            {this.checkFirebase()}
          </FirebaseContext.Consumer>
        </div>
        <div className="card card-login mx-auto mt-5">
          <div className="card-header">Login Admin</div>
          <div className="card-body">
            <Form>
              <Form.Group controlId="email">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  onChange={(e) => this.setValue(e.target)}
                />
              </Form.Group>

              <Form.Group controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  name="password"
                  onChange={(e) => this.setValue(e.target)}
                />
              </Form.Group>
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Remember me" />
              </Form.Group>
              <Button variant="primary" type="submit" onClick={this.isLogin}>
                Login
              </Button>
            </Form>

            {/* FOOTER */}
            <div className="text-center">
              <a className="d-block small" href="#">
                Forgot Password?
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  statusLogin: state.navbar.isLogin,
  emailInput: state.login.email,
  passwordInput: state.login.password,
});

// const mapDispatchToProps = (dispatch) => ({
//   changeStatusLogin: () => dispatch(loginAction()),
//   input: (data) => dispatch(inputAction(data)),
// });

const mapDispatchToProps = (dispatch) => ({
  changeStatusLogin: () => dispatch(setLogin()),
  input: (data) => dispatch(setInput(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
