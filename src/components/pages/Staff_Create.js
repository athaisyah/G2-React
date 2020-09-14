import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import { Redirect } from "react-router-dom";
// import { FirebaseContext } from "../../config/firebase/";
import firebase from "../../Firebase";
import auth from "../../Firebase";

// Child class
class CreateStaff extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      role: "",
      email: "",
      password: "",
    };
    this.ref = firebase.firestore().collection("staff");
  }

  setValue = (e) => {
    // console.log("datanyaaa=>>>>>> ", e.target.value);
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onClickHandler = (e) => {
    e.preventDefault();
    const { name, role, email, password } = this.state;

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.error("Error adding document: ", errorMessage);
      });

    this.ref
      .add({
        name,
        role,
        email,
        password,
      })
      .then((docRef) => {
        this.setState({
          name: "",
          role: "",
          email: "",
          password: "",
        });
        this.props.history.push("/");
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  };

  // onClickHandler = () => {
  //   const { email, password } = this.state;

  //   firebase
  //     .auth()
  //     .createUserWithEmailAndPassword(email, password)
  //     .then((res) => {
  //       console.log("success ", res);
  //     })
  //     .catch(function (error) {
  //       var errorCode = error.code;
  //       var errorMessage = error.message;
  //       console.log(errorCode, errorMessage);
  //     });
  // };

  // onClickHandler = () => {
  //   const { name, role, email, password } = this.state;

  //   this.props.firebase
  //     .createFirebaseUser({ email, password })
  //     .then((authUser) => {
  //       return this.props.firebase
  //         .usersDb()
  //         .doc(authUser.user.uid)
  //         .set({
  //           name,
  //           role,
  //           email,
  //         })
  //         .then(() => {
  //           alert("Create Staff is success");
  //           window.location.reload();
  //         });
  //     })
  //     .catch((er) => {
  //       console.error(er);
  //       alert(er.message);
  //     });
  //   // <Redirect to="/staff-list" />;
  //   // return history.push("/staff-list");
  // };

  render() {
    const { name, role, email, password } = this.state;

    return (
      <div>
        <br></br>
        <div className="container col-md-8">
          <div>
            <div className="h4">
              <i class="fas fa-users"></i>&nbsp; Add New Staff
            </div>
            <hr />

            <div>
              <Form onSubmit={this.onClickHandler}>
                <div className="row">
                  <div className="col-md-6">
                    <Form.Group controlId="staffName">
                      <Form.Label>Name</Form.Label>
                      <Form.Control
                        type="text"
                        name="name"
                        value={name}
                        onChange={this.setValue}
                      />
                    </Form.Group>
                  </div>
                  <div className="col-md-6">
                    <Form.Group controlId="staffRole">
                      <Form.Label>Role</Form.Label>
                      <Form.Control
                        as="select"
                        name="role"
                        value={role}
                        onChange={this.setValue}
                      >
                        <option value="Sales">Sales Staff</option>
                        <option value="Fulfillment">Fulfillment Staff</option>
                        <option value="Warehouse">Warehouse Staff</option>
                      </Form.Control>
                    </Form.Group>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6">
                    <Form.Group controlId="staffEmail">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Enter email"
                        name="email"
                        value={email}
                        onChange={this.setValue}
                      />
                    </Form.Group>
                  </div>
                  <div className="col-md-6">
                    <Form.Group controlId="staffPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={password}
                        onChange={this.setValue}
                      />
                    </Form.Group>
                  </div>
                </div>
                <br></br>
                <Button
                  style={{ width: "48.5%" }}
                  className="justify-content-md-center"
                  variant="primary"
                  type="submit"
                >
                  Add Staff
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default CreateStaff;

// class parentCreateStaff extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }
//   render() {
//     return (
//       <FirebaseContext.Consumer>
//         {(firebase) => <CreateStaff {...this.props} firebase={firebase} />}
//       </FirebaseContext.Consumer>
//     );
//   }
// }

// export default parentCreateStaff;
