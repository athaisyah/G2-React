import React, { Component } from "react";
import { Form, Container, Button } from "react-bootstrap";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      studentsList: [],
      username: "",
      password: "",
    };
  }

  componentDidMount() {
    this.setState({
      studentsList: localStorage.students
        ? JSON.parse(localStorage.students)
        : [],
    });
  }

  /* ONCLICK STUDENT INPUT */
  // clickStudent(e) {
  //   e.preventDefault();

  //   const newStudent = {
  //     username: this.state.username,
  //     password: this.state.password,
  //   };

  //   this.setState({
  //     students: [...this.state.students, newStudent],
  //     username: "",
  //     password: "",
  //   });
  // }

  /* ONCHANNGE STUDENT INPUT */
  changeStudent = (name) => (e) => {
    console.log(e.target.value);
    this.setState({
      [name]: e.target.value,
    });
  };

  // setValue = (e) => {
  //   this.setState({
  //     [e.name]: e.value,
  //   });
  // };

  onLogin = () => {
    const { username, password } = this.state;
    const { userList } = this.props;

    for (let i = 0; i < userList.length; i++) {
      const user = userList[i];

      if (user.username === username && user.password === password) {
        return this.props.changeStatusLogin();
      }
    }
  };

  // clickLogin = () => {
  //   let { username, password } = this.state;

  //   let studentsList =  localStorage.students
  //   ? JSON.parse(localStorage.students)
  //   : [],

  //   for (let i = 0; i < studentsList.length; i++) {
  //     let stud = studentsList[i];

  //     if (stud.username === username && stud.password === password) {
  //       return (console.log("berhasillllll"));
  //     }
  //   }
  // };

  render() {
    return (
      <div>
        <br></br>
        <Container>
          <Form>
            <Form.Group controlId="formGridUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control
                placeholder="john"
                name="username"
                onChange={this.changeStudent("username")}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                onChange={this.changeStudent("password")}
              />
            </Form.Group>

            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Remember me" />
            </Form.Group>

            <Button variant="primary">Login</Button>
          </Form>
        </Container>
      </div>
    );
  }
}

export default Login;
