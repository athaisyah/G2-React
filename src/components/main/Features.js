import React, { Component } from "react";
import { Card, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

class Features extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <br></br>
        <div className="container">
          <div className="row">
            {/* SHIPMENTS */}
            <div className="col-md-5">
              <Card style={{ width: "20rem" }}>
                <Card.Header className="font-weight-bold">
                  <i class="fas fa-shipping-fast"></i>&nbsp; Shipments
                </Card.Header>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <Card.Link href="#">
                      <Link to="/shipping">
                        <i class="fas fa-plus"></i>&nbsp; Add New
                      </Link>
                    </Card.Link>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Card.Link href="#">
                      <Link to="/shipping-list">
                        <i class="fas fa-list"></i>&nbsp; All Shipments
                      </Link>
                    </Card.Link>
                  </ListGroup.Item>
                </ListGroup>
              </Card>
            </div>

            {/* PRODUCTS */}
            <div className="col-md-5">
              <Card style={{ width: "20rem" }}>
                <Card.Header className="font-weight-bold">
                  <i class="fas fa-tag"></i>&nbsp; Products
                </Card.Header>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <Card.Link href="#">
                      <Link to="/product">
                        <i class="fas fa-plus"></i>&nbsp; Add New
                      </Link>
                    </Card.Link>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Card.Link href="#">
                      <Link to="/product-list">
                        <i class="fas fa-list"></i>&nbsp; All Products
                      </Link>
                    </Card.Link>
                  </ListGroup.Item>
                </ListGroup>
              </Card>
            </div>
          </div>
          <br></br>
          <div className="row">
            {/* CUSTOMERS */}
            <div className="col-md-5">
              <Card style={{ width: "20rem" }}>
                <Card.Header className="font-weight-bold">
                  <i class="fas fa-user"></i>&nbsp; Customers
                </Card.Header>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <Card.Link href="#">
                      <Link to="/customer">
                        <i class="fas fa-plus"></i>&nbsp; Add New
                      </Link>
                    </Card.Link>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Card.Link href="#">
                      <Link to="/customer-list">
                        <i class="fas fa-list"></i>&nbsp; All Customers
                      </Link>
                    </Card.Link>
                  </ListGroup.Item>
                </ListGroup>
              </Card>
            </div>

            {/* STAFF */}
            <div className="col-md-5">
              <Card style={{ width: "20rem" }}>
                <Card.Header className="font-weight-bold">
                  <i class="fas fa-users-cog"></i>&nbsp; STAFF
                </Card.Header>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <Card.Link href="#">
                      <Link to="/staff">
                        <i class="fas fa-plus"></i>&nbsp; Add Staff
                      </Link>
                    </Card.Link>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Card.Link href="#">
                      <Link to="/staff-list">
                        <i class="fas fa-list"></i>&nbsp; All Staff
                      </Link>
                    </Card.Link>
                  </ListGroup.Item>
                </ListGroup>
              </Card>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Features;
