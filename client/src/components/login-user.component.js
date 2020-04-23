import React, { Component } from "react";
import axios from 'axios';

class LoginUser extends Component {
  constructor(props){
    super(props)
    this.state = {
      fullName: '',
      password: '',
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

  onSubmit(e){
    e.preventDefault()

    const User = {
      fullName: this.state.fullName,
      password: this.state.password
    };

    axios.post("/login", User).then((res) => console.log(res.data));

    window.location = "/chat";
  };

  render() {
    return(
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-5 mx-auto">
            <form noValidate onSubmit={this.onSubmit}>
              <h1 className="h3 mb-3 font-weight-normal">Sign in or Bryson will Fire you</h1>
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
          </div>
        </div>
      </div>
    )
  }
}

export default LoginUser;
