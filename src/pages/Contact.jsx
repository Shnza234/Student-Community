// src/pages/Contact.jsx
import React from 'react';

export default function Contact() {
  return (
    <div className="container section">
      <h1>Contact</h1>
      <p>Got questions, ideas, or feedback? We’re listening.</p>
      <form className="form">
        <input className="input" placeholder="Your email" />
        <textarea className="input" rows="4" placeholder="Your message" />
        <button className="btn">Send</button>
      </form>
    </div>
  );
}
