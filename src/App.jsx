import React, { Component } from 'react';
import ChatBar from './ChatBar.jsx';
import MessageContainer from './MessageContainer.jsx';
import Nav from './Nav.jsx';
const uuidv1 = require('uuid/v1');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: 'Anonymous',
      messages: []
    };
    this.onNewPost = this.onNewPost.bind(this);
    this.onNewUser = this.onNewUser.bind(this);
    this.incMessage = this.incMessage.bind(this);

    this.socket = new WebSocket('ws://localhost:3001');
    this.socket.addEventListener('message', this.incMessage);
  }

  componentDidMount() {
    console.log('componentDidMount <App />');
    setTimeout(() => {
      console.log('Simulating incoming message');
      // Add a new message to the list of messages in the data store
      const newMessage = { id: 3, username: 'Michelle', content: 'Hello there!' };
      const messages = this.state.messages.concat(newMessage);
      // Update the state of the app component.
      // Calling setState will trigger a call to render() in App and all child components.
      this.setState({ messages: messages });
    }, 3000);

    // server and client websockets are connected
    this.socket.onopen = event => {
      console.log('Connected to Server!');
    };
  }

  onNewUser(user) {
    this.setState({ currentUser: user });
  }

  onNewPost(content) {
    const newMessage = {
      id: uuidv1(),
      username: this.state.currentUser,
      content: content
    };
    this.socket.send(JSON.stringify(newMessage));
    console.log('Sent message to server', newMessage);
  }

  incMessage(message) {
    let msg = JSON.parse(message.data);
    console.log(msg);
    //build the whatever
    // push to array
    const messages = this.state.messages.concat(msg);
    this.setState({ messages: messages });
  }

  render() {
    return (
      <div>
        <Nav />
        <MessageContainer messages={this.state.messages} />
        <ChatBar onNewUser={this.onNewUser} onNewPost={this.onNewPost} currentUser={this.state.currentUser} />
      </div>
    );
  }
}
export default App;
