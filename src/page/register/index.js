import React, { Component } from "react";
import { Form, Button, Col, Container } from "react-bootstrap";

const students = [
  {
    fullname: "John Parker",
    username: "johnp",
    email: "john@mail.com",
    password: "123",
    quotes: "Never stop learning!",
    img:
      "https://i.pinimg.com/564x/02/e8/f0/02e8f0e74a786e1e5291a8643ca2154d.jpg",
    github: "https://github.com/",
  },
];

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students:
        localStorage.getItem("students") !== "[]" &&
        localStorage.getItem("students") !== null
          ? JSON.parse(localStorage.getItem("students"))
          : students,

      fullname: "",
      username: "",
      email: "",
      password: "",
      quotes: "",
      img: "",
      github: "",
    };

    this.clickStudent = this.clickStudent.bind(this);
  }

  componentDidUpdate() {
    localStorage.setItem("students", JSON.stringify(this.state.students));
  }

  /* ONCLICK STUDENT INPUT */
  clickStudent(e) {
    e.preventDefault();

    const newStudent = {
      fullname: this.state.fullname,
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
      quotes: this.state.quotes,
      img: this.state.img,
      github: this.state.github,
    };

    this.setState({
      students: [...this.state.students, newStudent],
      fullname: "",
      username: "",
      email: "",
      password: "",
      quotes: "",
      img: "",
      github: "",
    });
  }

  /* ONCHANNGE STUDENT INPUT */
  changeStudent = (name) => (e) => {
    console.log(e.target.value);
    this.setState({
      [name]: e.target.value,
    });
  };

  render() {
    return (
      <div>
        <br></br>
        <Container>
          <Form>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridAddress1">
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                  placeholder="John Parker"
                  name="fullname"
                  onChange={this.changeStudent("fullname")}
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridAddress1">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  placeholder="john"
                  name="username"
                  onChange={this.changeStudent("username")}
                />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  onChange={this.changeStudent("email")}
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  name="password"
                  onChange={this.changeStudent("password")}
                />
              </Form.Group>
            </Form.Row>

            <Form.Group controlId="formGridAddress2">
              <Form.Label>Quotes</Form.Label>
              <Form.Control
                placeholder=""
                name="quotes"
                onChange={this.changeStudent("quotes")}
              />
            </Form.Group>

            <Form.Row>
              <Form.Group as={Col} controlId="formGridImg">
                <Form.Label>Img Link</Form.Label>
                <Form.Control name="img" onChange={this.changeStudent("img")} />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridGithub">
                <Form.Label>Github</Form.Label>
                <Form.Control
                  name="github"
                  onChange={this.changeStudent("github")}
                />
              </Form.Group>
            </Form.Row>

            <Button variant="primary" onClick={this.clickStudent}>
              Register
            </Button>
          </Form>
        </Container>
      </div>
    );
  }
}

export default Register;
