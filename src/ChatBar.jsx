import React, { Component } from 'react';

class ChatBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: '',
      content: ''
    };

    this.onCompose = this.onCompose.bind(this);
    this.onContentChange = this.onContentChange.bind(this);
    this.keyPress = this.keyPress.bind(this);
    this.onUserChange = this.onUserChange.bind(this);
    this.onUserKeyChange = this.onUserKeyChange.bind(this);
  }
  onCompose(event) {
    this.setState((prev, props) => ({
      content: '',
      type: 'postMessage'
    }));
  }

  onContentChange(event) {
    this.setState({
      content: event.target.value
    });
  }

  // when client presses Enter, checks to see if message field is empty.
  // if field has content, send to server to be posted
  keyPress(evt) {
    if (evt.keyCode == 13) {
      if (!this.state.content == '') {
        this.props.onNewPost(this.state.content);
        this.setState({ content: '' });
      } else {
        alert('Please enter a message.');
      }
    }
  }

  onUserChange(evt) {
    this.setState({
      user: evt.target.value
    });
  }

  // When client enters a new username and presses Enter,
  // sends new Current User's username to the server to be posted to the chat
  onUserKeyChange(evt) {
    if (evt.keyCode == 13) {
      this.props.onNewUser(this.state.user);
    }
  }

  render() {
    return (
      <div>
        <footer className='chatbar'>
          <input
            className='chatbar-username'
            placeholder='Your Name (Optional)'
            value={this.state.user}
            onChange={this.onUserChange}
            onKeyDown={this.onUserKeyChange}
          />
          <input
            className='chatbar-message'
            placeholder='Type a message and hit ENTER'
            value={this.state.content}
            onChange={this.onContentChange}
            onKeyDown={this.keyPress}
          />
        </footer>
      </div>
    );
  }
}

export default ChatBar;
