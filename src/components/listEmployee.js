import React, { Component } from "react";
import { Container, Table, Button } from "react-bootstrap";
import { connect } from "react-redux";
import * as actions from "../actions/employeeActions";
import { bindActionCreators } from "redux";

class ListEmployee extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     employeesList: [],
  //     status: false,
  //   };
  // }

  // componentDidMount() {
  //   this.setState({
  //     employeesList: localStorage.employees
  //       ? JSON.parse(localStorage.employees)
  //       : [],
  //   });
  // }

  /* START FROM HERE */

  handleEdit = (index) => {
    this.props.updateTransactionIndex(index);
  };

  handleDelete = (index) => {
    this.props.deleteTransaction(index);
  };

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
              {this.props.list.map((val, idx) => {
                return (
                  <tr key={idx}>
                    <td>{idx + 1}</td>
                    <td>{val.name}</td>
                    <td>{val.email}</td>
                    <td>{val.phone}</td>
                    <td>{val.address}</td>
                    <td>
                      <Button variant="danger" onClick={this.handleDelete}>
                        Delete
                      </Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    list: state.list,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      updateTransactionIndex: actions.updateIndex,
      deleteTransaction: actions.Delete,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ListEmployee);
