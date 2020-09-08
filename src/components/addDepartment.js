import React, { Component } from "react";
import { Row, Col, Container, Form, Button, Table } from "react-bootstrap";

class Department extends Component {
  constructor(props) {
    super(props);
    this.state = {
      department: "",
      departmentList: [],
      isSaved: false,
    };
  }

  /* ONCLICK BUTTON ADD DEPARTMENT*/
  addDepartment = (event) => {
    event.preventDefault();

    let departmentsLS = localStorage.getItem("departmentsLS");
    let arr = [];
    if (departmentsLS) {
      arr = JSON.parse(departmentsLS);
      arr.push(this.state.department);
      localStorage.setItem("departmentsLS", JSON.stringify(arr));
    } else {
      arr.push(this.state.department);
      localStorage.setItem("departmentsLS", JSON.stringify(arr));
    }
    // const departmentData = this.state;
    // console.log("Datanya adalah ", departmentData);
  };

  componentDidMount() {
    this.setState({
      departmentList: localStorage.departmentsLS
        ? JSON.parse(localStorage.departmentsLS)
        : [],
    });
  }

  // componentDidMount() {
  //   const department = window.localStorage.getItem("departmentsLS");
  //   const parseDepartment = JSON.parse(department);
  //   if (department == null) {
  //     return false;
  //   } else {
  //     this.setState({
  //       department: parseDepartment,
  //     });
  //     console.log(this.state.department);
  //   }
  // }

  /* ONCHANGE DEPARTMENT INPUT */
  setDepartment = (event) => {
    event.preventDefault();
    // console.log(event.target.value);
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    // const { department } = this.state;
    return (
      <div>
        <Container>
          <Row>
            <Col>
              <br></br>
              <h2>ADD NEW DEPARTMENT</h2>
              <Form>
                <Form.Group controlId="formBasicCheckbox">
                  <Form.Control
                    type="text"
                    name="department"
                    onChange={this.setDepartment}
                  />
                </Form.Group>
                <Button variant="primary" onClick={this.addDepartment}>
                  Create Department
                </Button>
              </Form>
            </Col>
          </Row>
          <br></br>

          <Row>
            <Col>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>NO</th>
                    <th>DEPARTMENT NAME</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.departmentList.map((val, idx) => {
                    return (
                      <tr key={idx}>
                        <td>{idx + 1}</td>
                        <td>{val}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Department;
