import React, { Component } from "react";
import firebase from "../../../Firebase";
import { Link } from "react-router-dom";

class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      key: "",
      name: "",
      // username: "",
      // email: "",
      // password: "",
      quotes: "",
      img: "",
      github: "",
    };
  }

  onChange = (e) => {
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState({ student: state });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const { name, quotes, img, github } = this.state;
  };

  render() {
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">EDIT STUDENT</h3>
          </div>
          <div class="panel-body">
            <h4>
              <Link to="/student" class="btn btn-primary">
                Student List
              </Link>
            </h4>
            <form onSubmit={this.onSubmit}>
              <div class="form-group">
                <label for="name">name:</label>
                <input
                  type="text"
                  class="form-control"
                  name="name"
                  value={this.state.name}
                  onChange={this.onChange}
                />
              </div>
              <div class="form-group">
                <label for="quotes">quotes:</label>
                <input
                  type="text"
                  class="form-control"
                  name="quotes"
                  value={this.state.quotes}
                  onChange={this.onChange}
                />
              </div>
              <div class="form-group">
                <label for="img">img:</label>
                <input
                  type="text"
                  class="form-control"
                  name="img"
                  value={this.state.img}
                  onChange={this.onChange}
                />
              </div>

              <div class="form-group">
                <label for="github">github:</label>
                <input
                  type="text"
                  class="form-control"
                  name="github"
                  value={this.state.github}
                  onChange={this.onChange}
                />
              </div>

              <button type="submit" class="btn btn-success">
                Save
              </button>
              {/* <button type="submit" class="btn btn-danger">
                Delete
              </button> */}
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Edit;
