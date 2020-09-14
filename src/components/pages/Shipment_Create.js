import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import firebase from "../../Firebase";

class CreateShipping extends Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection("customers");
    this.ref = firebase.firestore().collection("products");

    this.unsubscribe = null;
    this.state = {
      customers: [],
      products: [],
    };
  }

  // SHOW DATA
  // onCollectionUpdate = (querySnapshot) => {
  //   const products = [];
  //   querySnapshot.forEach((doc) => {
  //     const { product, quantity, priceUnit, substitute } = doc.data();
  //     products.push({
  //       key: doc.id,
  //       doc, // DocumentSnapshot
  //       product,
  //       quantity,
  //       priceUnit,
  //       substitute,
  //     });
  //   });
  //   this.setState({
  //     products,
  //   });
  // };
  
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

  // CREATE SHIPPING
  setValue = (e) => {
    // console.log("datanyaaa=>>>>>> ", e.target.value);
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onClickHandler = (e) => {
    e.preventDefault();
    const { product, quantity, priceUnit, substitute } = this.state;

    this.ref
      .add({
        product,
        quantity,
        priceUnit,
        substitute,
      })
      .then((docRef) => {
        this.setState({
          product: "",
          quantity: "",
          priceUnit: "",
          substitute: "",
        });
        this.props.history.push("/");
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  };

  render() {
    return (
      <div>
        <br></br>
        <div className="container col-md-8">
          <div>
            <div className="h4">
              <i class="fas fa-truck"></i>&nbsp; Add New Shipping
            </div>
            <hr />

            <div>
              <Form>
                {this.state.customers.map((cust, index) => (
                  <Form.Group controlId="customer">
                    <Form.Label>Customer</Form.Label>
                    <Form.Control as="select">
                      <option key={index}>{cust.fullname}</option>
                      {/* <option>John</option> */}
                    </Form.Control>
                  </Form.Group>
                ))}

                <Form.Group controlId="date" bsSize="large">
                  <Form.Label>Shipping Date</Form.Label>
                  <Form.Control
                    type="date"
                    style={{ width: "100%" }}
                    value={`${new Date()}`}
                  />
                </Form.Group>

                <div className="row">
                  <div className="col-md-6">
                    {this.state.products.map((prod, index) => (
                      <Form.Group controlId="productName">
                        <Form.Label>Product</Form.Label>
                        <Form.Control as="select">
                          <option key={index}>{prod.product}</option>
                          {/* <option>LG Refrigerator</option> */}
                        </Form.Control>
                      </Form.Group>
                    ))}
                  </div>
                  <div className="col-md-6">
                    <Form.Group controlId="productQuantity">
                      <Form.Label>Product Quantity</Form.Label>
                      <Form.Control type="number" />
                    </Form.Group>
                  </div>
                </div>

                <Form.Group controlId="staff">
                  <Form.Label>Staff</Form.Label>
                  <Form.Control as="select">
                    <option>Staf 1</option>
                    <option>Staff 2</option>
                  </Form.Control>
                </Form.Group>

                <Button variant="primary" type="submit">
                  Create Shipping
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateShipping;
