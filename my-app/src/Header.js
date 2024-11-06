import React from 'react';
import logo from './images/logo.png';  // Adjust the path as needed

function Header() {
  return (
    <header>
      <img src={logo} alt="Little Lemon Logo" style={{ width: '100px' }} />
      <h1>Welcome to Little Lemon</h1>
    </header>
  );
}

export default Header;