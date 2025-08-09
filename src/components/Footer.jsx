// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <div className="brand">Campus Connect</div>
          <p className="muted">A student community to find events, clubs, and friends.</p>
        </div>
        <nav className="footer-links">
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/resources">Resources</Link>
          <Link to="/forum">Forum</Link>
        </nav>
      </div>
      <div className="footer-bottom">
        © {new Date().getFullYear()} Campus Connect
      </div>
    </footer>
  );
}
