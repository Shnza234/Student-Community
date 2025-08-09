// src/pages/Clubs.jsx
import React from 'react';
import { clubs } from '../data/clubs.js';
import Card from '../components/Card.jsx';

export default function Clubs() {
  return (
    <div className="container section">
      <h1>Clubs</h1>
      <p className="muted">From sunrise runs to midnight debates—find your crew.</p>
      <div className="grid">
        {clubs.map(c => (
          <Card key={c.id} to={`/clubs/${c.id}`} title={c.name} subtitle={c.about} meta={`${c.members} members`} />
        ))}
      </div>
    </div>
  );
}
