import React, { Component } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { setLogin, setInput } from "../../../action";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
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
    const { username, password } = this.state;
    this.props.input({ username, password });
  };

  isLogin = (e) => {
    e.preventDefault();

    if (
      this.props.userInput === "admin" &&
      this.props.passwordInput === "admin"
    ) {
      return this.props.changeStatusLogin();
    } else {
      alert("Invalid username or password!!");
    }
  };

  render() {
    if (this.props.statusLogin) return <Redirect to="/landingpage" />;

    return (
      <>
        <div>
          <Container>
            <br></br>
            <br></br>
            <br></br>
            <br></br>

            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  name="username"
                  onChange={(e) => this.setValue(e.target)}
                  type="text"
                  placeholder="Enter Username"
                />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  name="password"
                  onChange={(e) => this.setValue(e.target)}
                  type="password"
                  placeholder="Password"
                />
              </Form.Group>
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Remember me" />
              </Form.Group>
              <Button onClick={this.isLogin} variant="primary" type="submit">
                Login
              </Button>
            </Form>
          </Container>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  statusLogin: state.navbar.isLogin,
  userInput: state.login.username,
  passwordInput: state.login.password,
});

const mapDispatchToProps = (dispatch) => ({
  changeStatusLogin: () => dispatch(setLogin()),
  input: (data) => dispatch(setInput(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
