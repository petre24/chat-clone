import React, { Component } from "react";
import { Alert } from "reactstrap";

import axios from "axios";

class LoginUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: "",
      password: "",
      userStatus: true,
      passStatus: true,
    };
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChangeUsername = (e) => {
    this.setState({
      fullName: e.target.value,
    });
  };

  onChangePassword = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  onSubmit(e) {
    e.preventDefault();

    const User = {
      fullName: this.state.fullName,
      password: this.state.password,
    };

    axios
      .post("/login", User)
      .then((res) => {
        console.log(res.data);
        this.setState({ userStatus: true });

        if (res.data === "Login Unsuccessful") {
          this.setState({ passStatus: false });
        } else {
          this.setState({ passStatus: true });
          window.location = "/chat";
        }
      })
      .catch((err) => {
        this.setState({ userStatus: false });
        console.log(err.response.status);
      });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-5 mx-auto">
            <form noValidate onSubmit={this.onSubmit}>
              <h1 className="h3 mb-3 font-weight-normal">Sign in</h1>
              <div className="form-group">
                <label htmlFor="fullName">Username</label>
                <input
                  type="text"
                  className="form-control"
                  name="fullName"
                  placeholder="Enter username"
                  value={this.state.fullName}
                  onChange={this.onChangeUsername}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="Enter password"
                  value={this.state.password}
                  onChange={this.onChangePassword}
                />
              </div>
              <button
                type="submit"
                className="btn btn-lg btn-primary btn-block"
              >
                Sign in
              </button>
            </form>
            <br />
            {!this.state.userStatus && (
              <Alert color="danger">Error: User not found</Alert>
            )}
            {!this.state.passStatus && (
              <Alert color="danger">Error: Incorrect Password</Alert>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default LoginUser;
