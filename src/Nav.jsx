import React, { Component } from 'react';

class Nav extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <nav className='navbar'>
          <a href='/' className='navbar-brand'>
            <img className='teethIcon' src='/build/chattering-teeth.png' />
            chatter
          </a>
          <p className='userCount'>User(s) online: {this.props.userCount}</p>
        </nav>
      </div>
    );
  }
}

export default Nav;
