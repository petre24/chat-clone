import React, { Component } from "react";

class ChatScreen extends Component {

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-12">
            <div className="chat">
              <div className="col-xs-5 col-xs-offset-3">
                <input
                  type="text"
                  value={this.props.text}
                  placeholder="chat here..."
                  className="form-control"
                  onChange={this.props.handleTextChange}
                  onKeyDown={this.props.handleTextChange}
                />
              </div>
              <div className="clearfix"></div>
            </div>
          </div>
          <h4 className="greetings">Hello</h4>
        </div>
      </div>
    );
  }
}

export default ChatScreen;
