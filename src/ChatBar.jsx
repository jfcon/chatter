import React, { Component } from "react";

class ChatBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <footer className="chatbar">
          <input className="chatbar-username" placeholder="Your Name (Optional)" defaultValue={this.props.currentUser} />
          <input className="chatbar-message" placeholder="Type a message and hit ENTER" />
        </footer>
      </div>
    );
  }
}

export default ChatBar;
