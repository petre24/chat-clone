import axios from 'axios';
import React, { Component } from 'react';
import {
  Button, Container, Form, FormGroup, Label, Input,
} from 'reactstrap';


const labelStyle = {
  fontWeight: 'bold',
};

const inputStyle = {
  width: '40vw',
};

const formStyle = {
  float: 'left',
  width: '50vw',
  padding: '10px',
  border: '1px gray solid',
  borderRadius: '10px',
  marginTop: '25px',
};

const titleStyle = {
  padding: '0',
  float: 'center',
  margin: '10px 0px',
};

class RegisterUser extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      fullName: '',
      email: '',
      password: '',
    };
  }

  onChangeUsername(e) {
    this.setState({
      fullName: e.target.value,
    });
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const user = {
      fullName: this.state.fullName,
      email: this.state.email,
      password: this.state.password,
    };

    axios.post('/register/', user).then((res) => console.log(res.data));

    window.location = '/chat';
  }

  render() {
    return (
      <>
        <Container style={titleStyle}>
          <h1>Create a Free Account</h1>
          <h4>{'It\'s quick and painless.'}</h4>
        </Container>
        <Container style={formStyle}>
          <Form onSubmit={this.onSubmit}>
            <FormGroup>
              <Label style={labelStyle} for="username">
                Username
              </Label>
              <Input
                style={inputStyle}
                required
                type="text"
                name="fullName"
                id="username"
                placeholder="Just don't be inappropriate.."
                onChange={this.onChangeUsername}
              />
            </FormGroup>
            <FormGroup>
              <Label style={labelStyle} for="userEmail">
                Email
              </Label>
              <Input
                style={inputStyle}
                required
                type="email"
                name="email"
                id="userEmail"
                placeholder="myemail@example.com"
                onChange={this.onChangeEmail}
              />
            </FormGroup>
            <FormGroup>
              <Label style={labelStyle} for="userPassword">
                Password
              </Label>
              <Input
                style={inputStyle}
                required
                type="password"
                name="password"
                id="userPassword"
                placeholder="********"
                onChange={this.onChangePassword}
              />
            </FormGroup>
            <Button type="submit" color="primary">
              Register
            </Button>
          </Form>
        </Container>
      </>
    );
  }
}

export default RegisterUser;
