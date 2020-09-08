import React, { Component } from "react";
import ReactDOM from "react-dom";
import firebase from "../../../Firebase";
import { Link } from "react-router-dom";
// import Firebase, { FirebaseContext } from "../../../config/firebase";

class Create extends Component {
  constructor() {
    super();
    this.ref = firebase.firestore().collection("students");
    this.state = {
      name: "",
      // username: "",
      // email: "",
      // password: "",
      quotes: "",
      img: "",
      github: "",
    };
  }

  // name, username, email, password, quotes, img, github

  onChange = (e) => {
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);
  };

  onSubmit = (e) => {
    e.preventDefault();

    const { name, quotes, img, github } = this.state;

    this.ref
      .add({
        name,
        // username,
        // email,
        // password,
        quotes,
        img,
        github,
      })
      .then(() => {
        this.setState({
          name: "",
          // username: "",
          // email: "",
          // password: "",
          quotes: "",
          img: "",
          github: "",
        });
        this.props.history.push("/");
      })
      .catch((error) => {
        console.log("Error ", error);
      });
  };

  //   onSubmit = () => {
  //     const { name, quotes, img, github } = this.state;

  //     this.props.firebase
  //       .addStudent()
  //       .set({ name, quotes, img, github })
  //       .then(() => {
  //         window.location.reload();
  //       }).catch(function(error) {
  // console.error("Error adding document: ", error);
  // });
  //   };

  //   onSubmit = () => {
  //     const { name, username, email, password, quotes, img, github } = this.state;

  //     this.props.firebase
  //       .createFirebaseStudent({ email, password })
  //       .then((authUser) => {
  //         return this.props.firebase
  //           .addStudent()
  //           .doc(authUser.user.uid)
  //           .set({ name, quotes, img, github })
  //           .then(() => {
  //             window.location.reload();
  //           });
  //       })
  //       .catch((error) => {
  //         alert(error.message);
  //       });
  //   };

  render() {
    const { name, quotes, img, github } = this.state;
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">ADD STUDENT</h3>
          </div>
          <div class="panel-body">
            <h4>
              {/* <Link to="/" class="btn btn-primary"> */}
              Student List
              {/* </Link> */}
            </h4>
            <form onSubmit={this.onSubmit}>
              <div class="form-group">
                <label for="name">Name:</label>
                <input
                  type="text"
                  class="form-control"
                  name="name"
                  value={name}
                  onChange={this.onChange}
                  // placeholder="name"
                />
              </div>
              <div class="form-group">
                <label for="quotes">Quotes:</label>
                <textArea
                  class="form-control"
                  name="quotes"
                  onChange={this.onChange}
                  // placeholder="quotes"
                  cols="80"
                  rows="2"
                >
                  {quotes}
                </textArea>
              </div>
              <div class="form-group">
                <label for="img">Img:</label>
                <input
                  type="text"
                  class="form-control"
                  name="img"
                  value={img}
                  onChange={this.onChange}
                  // placeholder="img"
                />
              </div>

              <div class="form-group">
                <label for="github">Github:</label>
                <input
                  type="text"
                  class="form-control"
                  name="github"
                  value={github}
                  onChange={this.onChange}
                  // placeholder="github"
                />
              </div>

              <button type="submit" class="btn btn-success">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default Create;

// class CreateStudent extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }
//   render() {
//     return (
//       <FirebaseContext.Consumer>
//         {(firebase) => <CreateUserForm {...this.props} firebase={firebase} />}
//       </FirebaseContext.Consumer>
//     );
//   }
// }

// export default CreateStudent;
