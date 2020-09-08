import React, { Component } from "react";
import { Card, Button, Container, ButtonGroup } from "react-bootstrap";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      studentsList: [],
    };
  }

  componentDidMount() {
    this.setState({
      studentsList: localStorage.students
        ? JSON.parse(localStorage.students)
        : [],
    });
  }
  render() {
    return (
      <>
        <br></br>
        {/* <Container> */}
        <div class="row">
          {this.state.studentsList.length
            ? this.state.studentsList.map((value, index) => {
                return (
                  <div style={{ marginLeft: "50px" }} class="col=md-6">
                    <Card style={{ maxWidth: "18rem" }} key={index}>
                      <Card.Img variant="top" src={value.img} />
                      <Card.Body>
                        <Card.Title>{value.fullname}</Card.Title>
                        <Card.Text>{value.quotes}</Card.Text>
                        <ButtonGroup
                          className="mb-2"
                          style={{ align: "center" }}
                        >
                          <Button
                            variant="primary"
                            href={value.github}
                            target="_blank"
                          >
                            Github
                          </Button>
                          <Button variant="success">Edit</Button>
                        </ButtonGroup>
                      </Card.Body>
                    </Card>
                  </div>
                );
              })
            : null}
        </div>
        {/* </Container> */}
      </>
    );
  }
}

export default Home;
