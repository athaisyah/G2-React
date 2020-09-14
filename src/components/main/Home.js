import React, { Component } from "react";
import { Alert, Card } from "react-bootstrap";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <br></br>
        <div className="container">
          <Alert variant="primary">
            <Alert.Heading>
              Hey, Welcome to Point of Sales Web App?!
            </Alert.Heading>
          </Alert>
          {/* </div> */}

          {/* <div className="container"> */}
          <div className="row">
            <div className="col-md-4 align-items-center">
              <Card>
                <Card.Body>
                  <div className="row">
                    <div className="col-md-8">
                      <Card.Title>TOTAL ORDERS</Card.Title>
                      <Card.Text>200</Card.Text>
                    </div>
                    <div className="col-md-4">
                      <i class="fas fa-shopping-cart fa-4x"></i>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </div>

            <div className="col-md-4 align-items-center">
              <Card>
                <Card.Body>
                  <div className="row">
                    <div className="col-md-8">
                      <Card.Title>TOTAL PRODUCTS</Card.Title>
                      <Card.Text>15</Card.Text>
                    </div>
                    <div className="col-md-4">
                      <i class="fas fa-tags fa-4x"></i>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </div>

            <div className="col-md-4 align-items-center">
              <Card>
                <Card.Body>
                  <div className="row">
                    <div className="col-md-8">
                      <Card.Title>CUSTOMERS</Card.Title>
                      <Card.Text>10</Card.Text>
                    </div>
                    <div className="col-md-4">
                      <i class="fas fa-shopping-bag fa-4x"></i>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
