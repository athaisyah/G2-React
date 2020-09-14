import React, { Component } from "react";
import { Table } from "react-bootstrap";
import firebase from "../../Firebase";

class TableStaff extends Component {
  constructor(props) {
    super(props);
    this.state = { staff: [] };
    this.ref = firebase.firestore().collection("staff");
    this.unsubscribe = null;
  }

  onCollectionUpdate = (querySnapshot) => {
    const staff = [];
    querySnapshot.forEach((doc) => {
      const { name, role, email, password } = doc.data();
      staff.push({
        key: doc.id,
        doc, // DocumentSnapshot
        name,
        role,
        email,
        password,
      });
    });
    this.setState({
      staff,
    });
  };

  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
  }

  render() {
    return (
      <div>
        <br></br>
        <div className="container">
          <div>
            <h4>STAFF</h4>
            <hr />
          </div>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>NAME</th>
                <th>EMAIL</th>
                <th>ROLE</th>
              </tr>
            </thead>
            <tbody>
              {this.state.staff.map((stf, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{stf.name}</td>
                  <td>{stf.email}</td>
                  <td>{stf.role}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    );
  }
}

export default TableStaff;
