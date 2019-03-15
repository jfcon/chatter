import React, { Component } from 'react';

class MessageList extends Component {
  handleContent = () => {
    switch (this.props.type) {
      case 'meMessage':
        return <span className='message system'>{this.props.content}</span>;
        break;
      case 'errorMessage':
        return (
          <span className='message system'>
            <em>(on visible to you)</em>
            {this.props.content}
          </span>
        );
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
