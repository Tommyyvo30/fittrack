import React from "react";

const Header = () => {
  return (
    <header className="header">
      <h1>
        <a href="/" className="nav-link">
          FitTrack
        </a>
      </h1>
      <nav className="navbar">
        <a href="/about" className="nav-link">
          About Us
        </a>

        <a href="/contact" className="nav-link">
          Contact
        </a>
        <a href="/faq" className="nav-link">
          FAQ
        </a>
      </nav>
    </header>
  );
};

export default Header;
