// src/pages/ClubDetail.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { clubs } from '../data/clubs.js';

export default function ClubDetail() {
  const { id } = useParams();
  const club = clubs.find(c => c.id === id);
  if (!club) {
    return (
      <div className="container section">
        <h1>Club not found</h1>
        <Link to="/clubs" className="link">Back to clubs</Link>
      </div>
    );
  }
  return (
    <div className="container section">
      <Link to="/clubs" className="link">← All clubs</Link>
      <h1>{club.name}</h1>
      <p className="muted">{club.members} members</p>
      <p>{club.about}</p>
      <div className="card">
        <div className="card-body">
          <h3 className="card-title">Join {club.name}</h3>
          <p>Say hi. Show up. We’ll welcome you in.</p>
          <button className="btn">Request to join</button>
        </div>
      </div>
    </div>
  );
}
