import React, { Component } from "react";
import toplogo from './images/TopLogo.jpg';
import SignUpButton from './images/SignUpButton.jpg';
import bottomLogo from './images/TopLogo.jpg';
import scrollimg from './images/ScrollDown1.jpg';
import mailbox from './images/mailbox1.jpg'
import bottom from './images/anotherthing_penis.png';

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
                              <ul id="h rizontal-list">
                                  <li><a href="login" style={{color:"black"}}  >Login</a></li>
                                  <li><a href="register" style={{color:"black"}}>Sign up</a></li>
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
              <img src={mailbox} alt="mainMailbox" className="center" />
              <div class="img-with-text">
                  <h1 className="img-with-text" className="subtext">Messaging made Quick and Easy</h1>
                  <h3 className="subtext" >A Webservice for Private Messaging</h3>
                  <img className="subimg" src={scrollimg} alt="scroll button" />
              </div>
      </div>
      <img src={bottom} alt=""/>
      <div className="grey-wrapper">
          <div className="wrapper">
              <strong><h1 className="signup-text">Create a free account now!</h1></strong>
          </div>
          <div className="wrapper">
              <div className="SignUp-button">
              <img src={SignUpButton} alt="Sign up button" width="20%" style={{marginleft: "495"}} />
               </div>    
          </div>
      </div>
      <div className="dark-wrapper">
          <div className="wrapper">
              <img src={bottomLogo} alt="bottom logo" width="15%" />
          </div>
      </div>
      </div>
      </font>);
  }
}


export default HomePage;


