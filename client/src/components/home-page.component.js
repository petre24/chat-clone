import React, { Component } from "react";

class HomePage extends Component {
  render() {
    return (
      <font face="Comic sans MS">
      <div className="top-grey-wrapper">
          <div className="wrapper">
              <header>
                  <img src="https://imgur.com/fuj5QNv" alt="" width="35%" height="auto"></img>
                  <nav>
                      <div id="outer-menu">
                          <div className="table">
                              <ul id="horizontal-list">
                                  <li><a href="index.html" style={{color:"black"}}  >Login</a></li>
                                  <li><a href="index.html" style={{color:"black"}}>Sign up</a></li>
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
              <img src="./home-Page/home-Page/Images/mailbox1.jpg" alt="mainMailbox" className="center"></img>
              <div class="img-with-text">
                  <h1 className="img-with-text" className="subtext">Messaging made Quick and Easy</h1>
                  <h3 className="subtext" >A Webservice for Private Messaging</h3>
                  <img className="subimg" src="./home-Page/Images/ScrollDown1.jpg" alt="scroll button" ></img>
              </div>
      </div>
      <img src="./home-Page/home-Page/Images/anotherthing_penis.png" alt=""></img>
      <div className="grey-wrapper">
          <div className="wrapper">
              <strong><h1 className="signup-text">Create a free account now!</h1></strong>
          </div>
          <div className="wrapper">
              <div className="SignUp-button">
                  <img src="./home-Page/home-Page/Images/SignUpButton.jpg" alt="Sign up button" width="20%" style={{marginleft: "495"}}></img>
               </div>    
          </div>
      </div>
      <div className="dark-wrapper">
          <div className="wrapper">
              <img src="./home-Page/home-Page/Images/TopLogo.jpg" alt="bottom logo" width="15%"></img>
          </div>
      </div>
      </div>
      </font>);
  }
}


export default HomePage;
