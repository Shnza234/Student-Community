// src/pages/SignUp.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';

export default function SignUp() {
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
      <h1>Create your account</h1>
      <form className="form" onSubmit={handleSubmit}>
        <input className="input" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
        <button className="btn">Create account</button>
      </form>
    </div>
  );
}
