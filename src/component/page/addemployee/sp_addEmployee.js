import React, { Component } from "react";
import { Col, Container, Form, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { insert } from "../../../action";

class SP_addEmployee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // name: "",
      // email: "",
      // phone: "",
      // address: "",
    };
  }

  changeEmployee = (name) => (e) => {
    console.log(e.target.value);
    this.setState({
      [name]: e.target.value,
    });
  };

  clickEmployee = (e) => {
    e.preventDefault();
    alert("Submit ya");

    const { name, email, phone, address } = this.state;
    this.props.insertEmployee({
      name,
      email,
      phone,
      address,
    });
  };

  render() {
    return (
      <>
        <Container>
          <br></br>
          <h2>ADD NEW EMPLOYEE</h2>
          <hr></hr>
          <Form onSubmit={this.clickEmployee}>
            <Form.Group controlId="formGridName">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="John Doe"
                name="name"
                onChange={this.changeEmployee("name")}
              />
            </Form.Group>

            <Form.Row>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="john@ptn.co.id"
                  name="email"
                  onChange={this.changeEmployee("email")}
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridPhone">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="+62 82212345678"
                  name="phone"
                  onChange={this.changeEmployee("phone")}
                />
              </Form.Group>
            </Form.Row>

            <Form.Group controlId="formGridAddress">
              <Form.Label>Address</Form.Label>
              <Form.Control
                placeholder="1234 Main St"
                name="address"
                onChange={this.changeEmployee("address")}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
          <br></br>
        </Container>
      </>
    );
  }
}

//auth ngambil dari reducer
const mapStateToProps = (state) => ({
  name: state.auth.name,
  email: state.auth.email,
  phone: state.auth.phone,
  address: state.auth.address,
});

const mapDispatchToProps = (dispatch) => ({
  insertEmployee: (obj) => dispatch(insert(obj)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SP_addEmployee);
