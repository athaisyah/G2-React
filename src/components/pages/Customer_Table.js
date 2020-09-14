import React, { Component } from "react";
import { Table } from "react-bootstrap";
import firebase from "../../Firebase";

class TableCustomer extends Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection("customers");
    this.unsubscribe = null;
    this.state = {
      customers: [],
    };
  }

  onCollectionUpdate = (querySnapshot) => {
    const customers = [];
    querySnapshot.forEach((doc) => {
      const { fullname, email, address, phone } = doc.data();
      customers.push({
        key: doc.id,
        doc, // DocumentSnapshot
        fullname,
        email,
        address,
        phone,
      });
    });
    this.setState({
      customers,
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
            <h4>CUSTOMER</h4>
            <hr />
          </div>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>ID</th>
                <th>Fullname</th>
                <th>Phone</th>
                <th>Address</th>
              </tr>
            </thead>
            <tbody>
              {this.state.customers.map((cust, index) => (
                <tr>
                  <td>{index + 1}</td>
                  <td>{cust.uid}</td>
                  <td>{cust.fullname}</td>
                  <td>{cust.phone}</td>
                  <td>{cust.address}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    );
  }
}

export default TableCustomer;
