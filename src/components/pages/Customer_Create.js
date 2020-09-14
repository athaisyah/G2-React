import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
// import { FirebaseContext } from "../../config/firebase/";
import firebase from "../../Firebase";

class CreateCustomer extends Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection("customers");

    this.state = {
      fullname: "",
      email: "",
      address: "",
      phone: "",
    };
  }

  setValue = (e) => {
    // console.log("datanyaaa=>>>>>> ", e.target.value);
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onClickHandler = (e) => {
    e.preventDefault();
    const { fullname, email, phone, address } = this.state;

    this.ref
      .add({
        fullname,
        email,
        phone,
        address,
      })
      .then((docRef) => {
        this.setState({
          fullname: "",
          email: "",
          address: "",
          phone: "",
        });
        this.props.history.push("/");
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  };

  // setValue = (e) => {
  //   // console.log("datanyaaa=>>>>>> ", e.target.value);
  //   this.setState({
  //     [e.target.name]: e.target.value,
  //   });
  // };

  // onClickHandler = () => {
  //   const { fullname, email, address, phone } = this.state;

  //   this.props.firebase
  //     .customersDb()
  //     .doc()
  //     .set({ fullname, email, address, phone })
  //     .then(function () {
  //       console.log("Customer successfully written!");
  //     })
  //     .catch(function (error) {
  //       console.error("Error writing document: ", error);
  //     });

  //   // this.props.firebase
  //   //   .createFirebaseUser({ email, password })
  //   //   .then((authUser) => {
  //   //     return this.props.firebase
  //   //       .usersDb()
  //   //       .doc(authUser.user.uid)
  //   //       .set({
  //   //         name,
  //   //         role,
  //   //         email,
  //   //       })
  //   //       .then(() => {
  //   //         alert("Create Staff is success");
  //   //         window.location.reload();
  //   //       });
  //   //   })
  //   //   .catch((er) => {
  //   //     console.error(er);
  //   //     alert(er.message);
  //   //   });
  //   // <Redirect to="/staff-list" />;
  //   // return history.push("/staff-list");
  // };

  render() {
    const { fullname, email, phone, address } = this.state;

    return (
      <div>
        <br></br>
        <div className="container col-md-8">
          <div>
            <div className="h4">
              <i class="far fa-user"></i>&nbsp; Add a Customer
            </div>
            <hr />
            <div>
              <Form onSubmit={this.onClickHandler}>
                <div className="row">
                  <div className="col-md-6">
                    <Form.Group controlId="fullname">
                      <Form.Label>Fullname</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter name"
                        name="fullname"
                        value={fullname}
                        onChange={this.setValue}
                      />
                    </Form.Group>
                  </div>
                  <div className="col-md-6">
                    <Form.Group controlId="email">
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
                </div>
                <Form.Group controlId="address">
                  <Form.Label>Address</Form.Label>
                  <Form.Control
                    type="text-area"
                    placeholder="Enter address"
                    name="address"
                    value={address}
                    onChange={this.setValue}
                  />
                </Form.Group>
                <div className="row">
                  <div className="col-md-6">
                    <Form.Group controlId="phone">
                      <Form.Label>Phone Number</Form.Label>
                      <Form.Control
                        type="text"
                        name="phone"
                        value={phone}
                        onChange={this.setValue}
                      />
                    </Form.Group>
                  </div>
                </div>

                <Button
                  variant="primary"
                  type="submit"
                  // onClick={this.onClickHandler}
                >
                  Create Customer
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateCustomer;

// class parentCreateCustomer extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }
//   render() {
//     return (
//       <FirebaseContext.Consumer>
//         {(firebase) => <CreateCustomer {...this.props} firebase={firebase} />}
//       </FirebaseContext.Consumer>
//     );
//   }
// }

// export default parentCreateCustomer;
