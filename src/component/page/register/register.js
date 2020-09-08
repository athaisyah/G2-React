import React, { Component } from "react";
import { connect } from "react-redux";
import FirebaseContext from "../../../config/firebase/firebaseContext";
import { Container } from "react-bootstrap";

class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleOnSubmit = () => {
    this.props.firebase
      .createFirebaseUser(this.state)
      .then((res) => {
        console.log(res);
        alert("user successfully created!");
      })
      .catch((err) => {
        console.error(err);
        alert(err.message);
      });
  };

  handleChange = (e) => {
    // console.log(e.target.value);
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <React.Fragment>
        <Container>
          <br />
          <h2>New User ?</h2>
          <h4>Create an Account</h4>
          <br />

          <form action="" noValidate onSubmit={this.handleOnSubmit}>
            <div className="form-group">
              <label for="email">Email Address</label>
              <input
                noValidate
                className="form-control"
                type="email"
                name="email"
                placeholder="Email"
                //   value={email}
                onChange={this.handleChange}
              />
            </div>

            <div className="form-group">
              <label for="password">Password</label>
              <input
                noValidate
                className="form-control"
                type="password"
                name="password"
                placeholder="Password"
                //   value={password}
                onChange={this.handleChange}
              />
            </div>

            <button className="btn btn-primary mr-2">Register</button>
          </form>
        </Container>
      </React.Fragment>
    );
  }
}

class Register extends Component {
  render() {
    return (
      <FirebaseContext.Consumer>
        {(firebase) => <RegisterForm {...this.props} firebase={firebase} />}
      </FirebaseContext.Consumer>
    );
  }
}

export default connect()(Register);
