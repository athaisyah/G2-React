import React, { Component } from "react";
import { Container, Table } from "react-bootstrap";

class SP_listEmployee extends Component {
  constructor(props) {
    super(props);
    this.state = {};
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
                <th>NAME</th>
                <th>EMAIL</th>
                <th>PHONE</th>
                <th>ADDRESS</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{this.props.name}</td>
              </tr>
            </tbody>
          </Table>
        </Container>
      </div>
    );
  }
}

export default SP_listEmployee;
