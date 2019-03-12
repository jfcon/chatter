import React, { Component } from "react";
import ChatBar from "./ChatBar.jsx";
import Message from "./Message.jsx";
import Nav from "./Nav.jsx";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [{ id: 1, user: "Bobby", content: "hello" }, { id: 2, user: "Sally", content: "a/s/l?" }],
      currentUser: ""
    };
  }
  render() {
    return (
      <div>
        <Nav />
        <Message messages={this.state.messages} />
        <ChatBar currentUser={this.state.currentUser} />
      </div>
    );
  }
}
export default App;
