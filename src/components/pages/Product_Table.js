import React, { Component } from "react";
import { Table } from "react-bootstrap";
import firebase from "../../Firebase";

class TableCustomer extends Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection("products");
    this.unsubscribe = null;
    this.state = {
      products: [],
    };
  }

  onCollectionUpdate = (querySnapshot) => {
    const products = [];
    querySnapshot.forEach((doc) => {
      const { product, quantity, priceUnit, substitute } = doc.data();
      products.push({
        key: doc.id,
        doc, // DocumentSnapshot
        product,
        quantity,
        priceUnit,
        substitute,
      });
    });
    this.setState({
      products,
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
            <h4>LIST PRODUCT</h4>
            <hr />
          </div>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Product Name</th>
                <th>Quantity</th>
                <th>Unit Price</th>
              </tr>
            </thead>
            <tbody>
              {this.state.products.map((prod, index) => (
                <tr key={index}>
                  <td>{index + 1} </td>
                  <td>{prod.product}</td>
                  <td>{prod.quantity}</td>
                  <td>{prod.priceUnit}</td>
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
