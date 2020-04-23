import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import RegisterUser from "./components/register-user.component";
import LoginUser from "./components/login-user.component";
import HomePage from "./components/home-page.component";
import ChatScreen from "./components/chat-screen.component";

function App() {
  return (
    <Router>
      <div className="container">
        <Route path="/" exact component={HomePage} />
        <Route path="/register" component={RegisterUser} />
        <Route path="/login" component={LoginUser} />
        <Route path="/chat" component={ChatScreen} />
      </div>
    </Router>
  );
}

export default App;
