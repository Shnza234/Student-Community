// src/pages/NotFound.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="container section">
      <h1>Page not found</h1>
      <p>Let’s get you back to something good.</p>
      <Link to="/" className="btn">Go home</Link>
    </div>
  );
}
