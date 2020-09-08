import React, { Component } from "react";
import { Container, Table } from "react-bootstrap";
import { connect } from "react-redux";

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
                <td>{this.props.email}</td>
                <td>{this.props.phone}</td>
                <td>{this.props.address}</td>
              </tr>
            </tbody>
          </Table>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  name: state.auth.name,
  email: state.auth.email,
  phone: state.auth.phone,
  address: state.auth.address,
});

export default connect(mapStateToProps)(SP_listEmployee);
