// src/pages/SignIn.jsx
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const { signIn } = useAuth();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    signIn(email);
    navigate('/profile');
  };
  return (
    <div className="container section">
      <h1>Sign in</h1>
      <form className="form" onSubmit={handleSubmit}>
        <input className="input" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
        <button className="btn">Continue</button>
      </form>
      <p className="muted">No account? <Link to="/sign-up">Sign up</Link></p>
    </div>
  );
}
