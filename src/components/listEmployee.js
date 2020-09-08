import React, { Component } from "react";
import { Container, Table, Button } from "react-bootstrap";

class ListEmployee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employeesList: [],
      status: false,
    };
  }

  componentDidMount() {
    this.setState({
      employeesList: localStorage.employees
        ? JSON.parse(localStorage.employees)
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
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>NO</th>
                <th>NAME</th>
                <th>EMAIL</th>
                <th>PHONE</th>
                <th>ADDRESS</th>
                <th>ACTION</th>
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
                          <Button variant="primary">Resume</Button>
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

export default ListEmployee;
