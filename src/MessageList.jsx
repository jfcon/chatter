import React, { Component } from 'react';

class MessageList extends Component {
  // Checks message type to see what style should be applied
  handleContent = () => {
    switch (this.props.type) {
      case 'meMessage':
      case 'incomingNotification':
        return <span className='message-system'>{this.props.content}</span>;
        break;
      default:
        return <span className='message-content'>{this.props.content}</span>;
        break;
    }
  };

  render() {
    return (
      <div className='message'>
        <span className='message-username'>{this.props.username}</span>
        {this.handleContent()}
      </div>
    );
  }
}

export default MessageList;
