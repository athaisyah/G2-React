import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Card, Button, Container, ButtonGroup } from "react-bootstrap";

import firebase from "../../../Firebase";

class Show extends Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection("students");
    this.state = {
      students: [],
      //   student: {},
      //   key: "",
    };
  }
  // name, username, email, password, quotes, img, github

  collectionStudent = (querySnapshot) => {
    const students = [];
    querySnapshot.forEach((doc) => {
      const {
        name,
        // username,
        // email,
        // password,
        quotes,
        img,
        github,
      } = doc.data();
      students.push({
        name,
        // username,
        // email,
        // password,
        quotes,
        img,
        github,
      });
    });
    this.setState({
      students,
    });
  };

  /* START HERE*/
  //   constructor() {
  //     super();
  //     this.state = {
  //       mystudent: [],
  //     };
  //   }

  //   getStudents = () => {
  //     let stud = [];
  //     snapshot.forEach((doc, key) => {
  //       stud.push({
  //         name: doc.data().name,
  //         quotes: doc.data().quotes,
  //         img: doc.data().img,
  //         github: doc.data().github,
  //       });
  //     });
  //     this.setState({ myStudent: stud });
  //   };

  //   componentDidMount() {
  //     this.getStudents();
  //   }
  /* END HERE*/

  //   componentDidMount() {
  //     allStudent()
  //       .get()
  //       .then((querySnapshot) => {
  //         querySnapshot.forEach((doc) => {
  //           console.log(`${doc.id} => ${doc.data()}`);
  //         });
  //       });
  //   }

  //   std = () => {
  //     allStudent()
  //       .get()
  //       .then((querySnapshot) => {
  //         querySnapshot.forEach((doc) => {
  //           console.log(`${doc.id} => ${doc.data()}`);
  //         });
  //       });
  //   };

  //   db.collection("allStudent").get().then((querySnapshot) => {
  //     querySnapshot.forEach((doc) => {
  //         console.log(`${doc.id} => ${doc.data()}`);
  //     });
  // });

  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.collectionStudent);
  }

  delete(id) {
    firebase.firestore().collection("students").doc(id).delete();
  }

  render() {
    //   const {myStudent} = this.state

    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">STUDENT LIST</h3>
          </div>
          <div class="panel-body">
            {/* <h4>
              <Link to="/create">Add Student</Link>
              Add Student
            </h4> */}

            <div class="row">
              {this.state.students.map((student) => (
                <div
                  style={{ width: "18rem", marginRight: "1rem" }}
                  class="col=md-6"
                >
                  <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={student.img} />
                    <Card.Body>
                      <Card.Title>
                        {/* <Link to={`/show/${student.key}`}>{student.name}</Link> */}
                        {student.name}
                      </Card.Title>
                      <Card.Text>{student.quotes}</Card.Text>
                      <ButtonGroup>
                        <Button
                          variant="dark"
                          href={student.github}
                          target="_blank"
                        >
                          Github
                        </Button>

                        <Button variant="danger" onClick={this.delete}>
                          Delete
                        </Button>
                        <Button variant="warning">
                          <Link to={`/edit/${this.state.key}`}>Edit</Link>
                        </Button>
                      </ButtonGroup>
                    </Card.Body>
                  </Card>
                </div>
              ))}
            </div>
            {/* 
            <div class="row">
              {myStudent.map((stud, key) => (
                <div
                  style={{ width: "18rem", marginRight: "1rem" }}
                  class="col=md-6"
                >
                  <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={stud.img} />
                    <Card.Body>
                      <Card.Title>
                        {stud.name}
                      </Card.Title>
                      <Card.Text>{stud.quotes}</Card.Text>
                      <ButtonGroup>
                        <Button
                          variant="dark"
                          href={stud.github}
                          target="_blank"
                        >
                          Github
                        </Button>

                        <Button variant="danger" onClick={this.delete}>
                          Delete
                        </Button>
                        <Button variant="warning">
                          <Link to={`/edit/${this.state.key}`}>Edit</Link>
                        </Button>
                      </ButtonGroup>
                    </Card.Body>
                  </Card>
                </div>
              ))}
            </div> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Show;

//
//
//
//
//
//
//
//
// students.push({
//     // key: doc.id,
//     // doc, // DocumentSnapshot
//     name,
//     // username,
//     // email,
//     // password,
//     quotes,
//     img,
//     github,
//   });
// delete(id) {
//     firebase
//       .firestore()
//       .collection("students")
//       .doc(id)
//       .delete()
//       .then(() => {
//         console.log("Document successfully deleted!");
//       })
//       .catch((error) => {
//         console.error("Error: ", error);
//       });
//   }
// onClick={this.delete.bind(this, this.state.key)}
