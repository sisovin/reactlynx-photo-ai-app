import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="container">
        <h1>ReactLynx Photo AI App</h1>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
