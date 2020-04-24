import React, { Component } from "react";
import "./home-Page/home-Page/main.css";
import toplogo from "./home-Page/home-Page/Images/TopLogo.jpg";
import SignUpButton from "./home-Page/home-Page/Images/SignUpButton.jpg";
import bottomLogo from "./home-Page/home-Page/Images/bottomLogo.png";
import scrollimg from "./home-Page/home-Page/Images/ScrollDown1.jpg";
import mailbox from "./home-Page/home-Page/Images/mailbox1.jpg";
import bottom from "./home-Page/home-Page/Images/anotherthing_penis.png";

class HomePage extends Component {
  render() {
    return (
      <font face="Comic sans MS">
        <div className="top-grey-wrapper">
          <div className="wrapper">
            <header>
              <img src={toplogo} alt="" width="35%" height="auto" />
              <nav>
                <div id="outer-menu">
                  <div className="table">
                    <ul id="horizontal-list">
                      <li>
                        <a href="login" style={{ color: "black", fontSize:28 }}>
                          Login
                        </a>
                      </li>
                      <li>
                        <a href="register" style={{ color: "black", fontSize:28  }}>
                          Sign up
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
            </header>
          </div>
        </div>
        <div className="white-wrapper">
          <div className="wrapper">
            <br></br>
            <br></br>
            <img src={mailbox} alt="mainMailbox" className="fml"  />
            <div className="img-with-text">
              <strong><h1 className="msg">Messaging made Quick and Easy</h1></strong>
              <h3 className="subtext">A Webservice for Private Messaging</h3>
              <img className="subimg" src={scrollimg} alt="scroll button" />
            </div>
          </div>
          <img src={bottom} alt="" />
          <div className="grey-wrapper">
            <div className="wrapper">
              <strong>
                <h1 className="signup-text" className="botSignup">Create a free account now!</h1>
              </strong>
            </div>
            <div className="wrapper">
              <div className="SignUp-button">
                <a href="register">
                  <img
                  src={SignUpButton}
                  alt="Sign up button"
                  width="20%"
                  className="BootyholeMonday"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="dark-wrapper">
            <div className="wrapper">
              <img src={bottomLogo} alt="bottom logo" width="25%" className="botButtHole" />
            </div>
          </div>
        </div>
      </font>
    );
  }
}

export default HomePage;
