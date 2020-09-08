import React, { Component } from "react";
import { Col, Container, Form, Button } from "react-bootstrap";

const employees = [
  {
    name: "John",
    email: "john@ptn.co.id",
    phone: "0812345678",
    address: "123 Main Street",
    schName: "University Without Name",
    schStart: "26/08/2013",
    schEnd: "26/08/2017",
    jobName: "PT Without Name",
    jobStart: "30/08/2017",
    jobEnd: "30/08/2019",
    skill: "JavaScript",
  },
  {
    name: "Justin",
    email: "justin@ptn.co.id",
    phone: "083214569",
    address: "Streer Quay",
    schName: "University Without Name",
    schStart: "26/08/2015",
    schEnd: "26/08/2018",
    jobName: "PT Without Name",
    jobStart: "30/08/2019",
    jobEnd: "30/08/2020",
    skill: "HTML, CSS, JavaScript",
  },
];

class AddEmployee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employees:
        localStorage.getItem("employees") !== "[]" &&
        localStorage.getItem("employees") !== null
          ? JSON.parse(localStorage.getItem("employees"))
          : employees,

      name: "",
      email: "",
      phone: "",
      address: "",
      schName: "",
      schStart: "",
      schEnd: "",
      jobName: "",
      jobStart: "",
      jobEnd: "",
      skill: "",
    };

    this.clickEmployee = this.clickEmployee.bind(this);
  }

  componentDidUpdate() {
    localStorage.setItem("employees", JSON.stringify(this.state.employees));
  }

  /* ONCLICK EMPLOYEE INPUT */
  clickEmployee(e) {
    e.preventDefault();

    const newEmployee = {
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone,
      address: this.state.address,
      schName: this.state.schName,
      schStart: this.state.schStart,
      schEnd: this.state.schEnd,
      jobName: this.state.jobName,
      jobStart: this.state.jobStart,
      jobEnd: this.state.jobEnd,
      skill: this.state.skill,
    };

    this.setState({
      employees: [...this.state.employees, newEmployee],
      name: "",
      email: "",
      phone: "",
      address: "",
      schName: "",
      schStart: "",
      schEnd: "",
      jobName: "",
      jobStart: "",
      jobEnd: "",
      skill: "",
    });
  }

  /* ONCHANGE EMPLOYEE INPUT */
  changeEmployee = (name) => (e) => {
    // e.preventDefault();
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

            <Form.Group controlId="formGridAddress1">
              <Form.Label>Address</Form.Label>
              <Form.Control
                placeholder="1234 Main St"
                name="address"
                onChange={this.changeEmployee("address")}
              />
            </Form.Group>

            <br></br>
            <h4>Education</h4>
            <Form.Group controlId="formGridSchool">
              <Form.Label>School Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="University Without Name"
                name="schName"
                onChange={this.changeEmployee("schName")}
              />
            </Form.Group>
            <Form.Row>
              <Form.Group as={Col} controlId="date" bsSize="large">
                <Form.Label>Start Date</Form.Label>
                <Form.Control
                  type="date"
                  style={{ width: "100%" }}
                  name="schStart"
                  onChange={this.changeEmployee("schStart")}
                />
              </Form.Group>
              <Form.Group as={Col} controlId="date" bsSize="large">
                <Form.Label>End Date</Form.Label>
                <Form.Control
                  type="date"
                  style={{ width: "100%" }}
                  name="schEnd"
                  onChange={this.changeEmployee("schEnd")}
                />
              </Form.Group>
            </Form.Row>

            <br></br>
            <h4>Experience</h4>
            <Form.Group controlId="formGridCompany">
              <Form.Label>Company Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="PT Without Name"
                name="jobName"
                onChange={this.changeEmployee("jobName")}
              />
            </Form.Group>
            <Form.Row>
              <Form.Group as={Col} controlId="date" bsSize="large">
                <Form.Label>Start Date</Form.Label>
                <Form.Control
                  type="date"
                  style={{ width: "100%" }}
                  name="jobStart"
                  onChange={this.changeEmployee("jobStart")}
                />
              </Form.Group>
              <Form.Group as={Col} controlId="date" bsSize="large">
                <Form.Label>End Date</Form.Label>
                <Form.Control
                  type="date"
                  style={{ width: "100%" }}
                  name="jobEnd"
                  onChange={this.changeEmployee("jobEnd")}
                />
              </Form.Group>
            </Form.Row>

            <br></br>
            <h4>Skill</h4>
            <Form.Group controlId="formGridSkill">
              <Form.Control
                as="textarea"
                rows="2"
                name="skill"
                onChange={this.changeEmployee("skill")}
              />
            </Form.Group>

            <Button
              variant="primary"
              type="submit"
              onClick={this.clickEmployee}
            >
              Submit
            </Button>
          </Form>
          <br></br>
        </Container>
      </>
    );
  }
}

export default AddEmployee;
