import React, { Component } from "react";
import { Container, Table, Form } from "react-bootstrap";

class Assign extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employeesList: [],
      departmentList: [],

      department: "",
    };
  }

  componentDidMount() {
    this.setState({
      employeesList: localStorage.employees
        ? JSON.parse(localStorage.employees)
        : [],
      departmentList: localStorage.departmentsLS
        ? JSON.parse(localStorage.departmentsLS)
        : [],
    });
  }

  render() {
    return (
      <div>
        <Container>
          <br></br>
          <h2>LIST DATA EMPLOYEES</h2>
          <br></br>
          <Table striped bordered>
            <thead>
              <tr>
                <th>NO</th>
                <th>NAME</th>
                <th>EMAIL</th>
                <th>PHONE</th>
                <th>ADDRESS</th>
                <th>ASSIGN</th>
              </tr>
            </thead>
            <tbody>
              {this.state.employeesList.length
                ? this.state.employeesList.map((val, idx) => {
                    return (
                      <tr key={idx}>
                        <td>{idx + 1}</td>
                        <td>{val.name}</td>
                        <td>{val.email}</td>
                        <td>{val.phone}</td>
                        <td>{val.address}</td>
                        <td>
                          <Form.Control
                            as="select"
                            defaultValue="Assign Department"
                          >
                            <option>Assign Departmnet</option>
                            {this.state.departmentList.map((val, idx) => {
                              return <option value={val}>{val}</option>;
                            })}
                          </Form.Control>
                        </td>
                      </tr>
                    );
                  })
                : null}
            </tbody>
          </Table>
        </Container>
      </div>
    );
  }
}

export default Assign;
