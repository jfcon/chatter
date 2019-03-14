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
            Chatty
          </a>
          <p>User count: {this.props.userCount}</p>
        </nav>
      </div>
    );
  }
}

export default Nav;
