import React, { Component } from "react";
import { Col, Container, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import SP_listEmployee from "./sp_listEmployee";

class SP_addEmployee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      phone: "",
      address: "",
    };
  }

  changeEmployee = (name) => (e) => {
    console.log(e.target.value);
    this.setState({
      [name]: e.target.value,
    });
  };

  render() {
    return (
      <>
        <Container>
          <br></br>
          <h2>ADD NEW EMLOYEE</h2>
          <hr></hr>
          <Form>
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

            {/* <Button
              variant="primary"
              type="submit"
              onClick={this.clickEmployee}
            >
              Submit
            </Button> */}

            {/* <Button
              onClick={() => {
                this.props.history.replace("/sp_listEmployee");
              }}
            >
              SUBMIT
            </Button> */}

            <Link
              to={{
                pathname: "/sp_listEmployee",
                state: [{ id: 1, name: "Ford", color: "red" }],
              }}
            >
              Submit
            </Link>
          </Form>
          <br></br>
        </Container>

        <SP_listEmployee
          nameInput={this.state.name}
          emailInput={this.state.email}
          phoneInput={this.state.phone}
          addressInput={this.state.address}
        />
      </>
    );
  }
}

export default SP_addEmployee;
