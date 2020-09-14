import React, { Component } from "react";
import { Table } from "react-bootstrap";

class TableShipping extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <br></br>
        <div className="container">
          <div>
            <h4>SHIPPING RECORD</h4>
            <hr />
          </div>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>CUSTOMER</th>
                <th>PRODUCT</th>
                <th>QUANTITY</th>
                <th>STAFF</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>LG Television</td>
                <td>10</td>
                <td>Staff1</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    );
  }
}

export default TableShipping;
