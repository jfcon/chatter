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

  keyPress(evt) {
    if (evt.keyCode == 13) {
      this.props.onNewPost(this.state.content);
      this.setState({ content: '' });
    }
  }

  onUserChange(evt) {
    this.setState({
      user: evt.target.value
    });
  }

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
