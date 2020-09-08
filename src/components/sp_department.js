import React, { Component } from "react";
import { Container, Row, Col, Table, Form, Button } from "react-bootstrap";

class SPDepartment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      department: "",
    };
  }

  changeDepartment = (event) => {
    // console.log(event.target.value);
    this.setState({
      department: event.target.value,
    });
  };
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col>
              <br></br>
              <h2>ADD NEW DEPARTMENT</h2>
              <Form>
                <Form.Group controlId="formBasicCheckbox">
                  <Form.Control
                    type="text"
                    name="department"
                    onChange={this.changeDepartment}
                  />
                </Form.Group>
                <Button variant="primary">Create Department</Button>
              </Form>
            </Col>
          </Row>
          <br></br>

          <Row>
            <Col>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>NO</th>
                    <th>DEPARTMENT NAME</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>1</th>
                    <th>Finance</th>
                  </tr>
                  <tr>
                    <th>2</th>
                    <th>{this.state.department}</th>
                  </tr>
                </tbody>
              </Table>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default SPDepartment;
