import React, { Component } from 'react';
import ChatBar from './ChatBar.jsx';
import MessageContainer from './MessageContainer.jsx';
import Nav from './Nav.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: 'Anonymous',
      messages: []
    };
    this.socket = new WebSocket('ws://localhost:3001');
    this.onNewPost = this.onNewPost.bind(this);
    this.onNewUser = this.onNewUser.bind(this);
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
      username: this.state.currentUser,
      content: content
    };
    this.socket.send(JSON.stringify(newMessage));
    // const messages = this.state.messages.concat(newMessage);
    // this.setState({ messages: messages });
    console.log('Sent message to server', newMessage);
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
