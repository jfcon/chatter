import React, { Component } from "react";
import ChatBar from "./ChatBar.jsx";
import Message from "./Message.jsx";
import Nav from "./Nav.jsx";

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Message />
        <ChatBar />
      </div>
    );
  }
}
export default App;
