import React from 'react';
import logo from './logo.svg';

const Header = () => {
  return (
    <div className="container">
      <header className="header">
        <img src={logo} className="logo" alt="logo" />
        <h2 className="title">Meme Generator</h2>
      </header>
    </div>
  );
};

export default Header;
