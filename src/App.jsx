import React, { Component } from 'react';
import ChatBar from './ChatBar.jsx';
import MessageContainer from './MessageContainer.jsx';
import Nav from './Nav.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: 'Anonymous',
      messages: [],
      userCount: 0
    };
    this.onNewPost = this.onNewPost.bind(this);
    this.onNewUser = this.onNewUser.bind(this);
    this.incMessage = this.incMessage.bind(this);

    this.socket = new WebSocket('ws://localhost:3001');
    this.socket.addEventListener('message', this.incMessage);
  }

  componentDidMount() {
    console.log('componentDidMount <App />');

    // server and client websockets are connected
    this.socket.onopen = event => {
      console.log('Client connected to Server!');
    };
  }

  getUsers(user) {
    this.setState({ userCount: user.users });
  }

  onNewUser(user) {
    const oldUserName = this.state.currentUser;
    this.setState({ currentUser: user });
    const newUserMessage = {
      type: 'postNotification',
      content: `${oldUserName} has changed their name to ${user}`
    };
    this.socket.send(JSON.stringify(newUserMessage));
    console.log('New Username message sent to server', newUserMessage);
  }

  onNewPost(content) {
    const newMessage = {
      type: 'postMessage',
      username: this.state.currentUser,
      content: content
    };
    this.socket.send(JSON.stringify(newMessage));
    console.log('Client sending message to server', newMessage);
  }

  incMessage(message) {
    let msg = JSON.parse(message.data);
    if (msg.type === 'userCount') {
      return this.getUsers(msg);
    }
    console.log('Server broadcasts: ', msg);
    const messages = this.state.messages.concat(msg);
    this.setState({ messages: messages });
  }

  render() {
    return (
      <div>
        <Nav userCount={this.state.userCount} />
        <MessageContainer messages={this.state.messages} />
        <ChatBar onNewUser={this.onNewUser} onNewPost={this.onNewPost} currentUser={this.state.currentUser} />
      </div>
    );
  }
}
export default App;
