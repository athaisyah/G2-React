import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import firebase from "../../Firebase";

class CreateCustomer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: "",
      quantity: "",
      priceUnit: "",
      substitute: "",
    };
    this.ref = firebase.firestore().collection("products");
  }

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
    const { product, quantity, priceUnit, substitute } = this.state;

    return (
      <div>
        <br></br>
        <div className="container col-md-8">
          <div>
            <div className="h4">
              <i class="fas fa-tag"></i>&nbsp; Add a Product
            </div>
            <hr />
            <div>
              <Form onSubmit={this.onClickHandler}>
                <Form.Group controlId="productName">
                  <Form.Label>Product Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter product name"
                    name="product"
                    value={product}
                    onChange={this.setValue}
                  />
                </Form.Group>

                <div className="row">
                  <div className="col-md-4">
                    <Form.Group controlId="productQuantity">
                      <Form.Label>Product Quantity</Form.Label>
                      <Form.Control
                        type="number"
                        name="quantity"
                        value={quantity}
                        onChange={this.setValue}
                      />
                    </Form.Group>
                  </div>
                  <div className="col-md-4">
                    <Form.Group controlId="productPrice">
                      <Form.Label>Unit Price</Form.Label>
                      <Form.Control
                        type="number"
                        name="priceUnit"
                        value={priceUnit}
                        onChange={this.setValue}
                      />
                    </Form.Group>
                  </div>
                  <div className="col-md-4">
                    <Form.Group controlId="productSub">
                      <Form.Label>Product Substitute</Form.Label>
                      <Form.Control
                        as="select"
                        name="substitute"
                        value={substitute}
                        onChange={this.setValue}
                      >
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                      </Form.Control>
                    </Form.Group>
                  </div>
                </div>

                <Button variant="primary" type="submit">
                  Create Product
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateCustomer;
