// src/pages/Profile.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';

export default function Profile() {
  const { user } = useAuth();
  if (!user) return <Navigate to="/sign-in" replace />;
  return (
    <div className="container section">
      <h1>Your profile</h1>
      <div className="card">
        <div className="card-body">
          <div className="stack">
            <div>
              <div className="muted">Name</div>
              <div>{user.name}</div>
            </div>
            <div>
              <div className="muted">Email</div>
              <div>{user.email}</div>
            </div>
          </div>
          <button className="btn" style={{ marginTop: 12 }}>Edit profile</button>
        </div>
      </div>
    </div>
  );
}
