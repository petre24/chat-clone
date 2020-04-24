import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import RegisterUser from "./components/register-user.component";
import LoginUser from "./components/login-user.component";
import HomePage from "./components/home-page.component";
import ChatScreen from "./components/chat-screen.component";

import axios from 'axios';
import Pusher from 'pusher-js';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      chats: []
    };

    this.handleTextChange = this.handleTextChange.bind(this);
  }
  componentDidMount() {
    const pusher = new Pusher('db8ca11b6e7ab4c94470', {
      cluster: 'mt1',
      encrypted: true
    });
    const channel = pusher.subscribe('chat-clone');
    channel.bind('message', data => {
      this.setState({ chats: [...this.state.chats, data], test: '' });
    });

    this.handleTextChange = this.handleTextChange.bind(this);
  }

  handleTextChange(e) {
    if (e.keyCode === 13) { //if you press enter
      console.log("We are pressing enter");
      const payload = {
        message: this.state.text //paper
      };
      axios.post('/message', payload); //is being called everytime when the texts in the box is changing
    } else {
      this.setState({ text: e.target.value });
    }
  }

  render() {
    return (
      <Router>
        <div className="container">
          <Route path="/" exact component={HomePage} />
          <Route path="/register" component={RegisterUser} />
          <Route path="/login" component={LoginUser} />
          <Route path="/chat"
            render={(props) => <ChatScreen {...props} text={this.state.text} handleTextChange={this.handleTextChange} />} />
        </div>
      </Router>
    );
  }
}

export default App;