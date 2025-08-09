// src/pages/Events.jsx
import React from 'react';
import { events } from '../data/events.js';
import Card from '../components/Card.jsx';

export default function Events() {
  return (
    <div className="container section">
      <h1>Events</h1>
      <p className="muted">Plan your week. Meet your people.</p>
      <div className="grid">
        {events.map(e => (
          <Card key={e.id} to={`/events/${e.id}`} title={e.title} subtitle={e.blurb} meta={`${e.date} • ${e.location}`} />
        ))}
      </div>
    </div>
  );
}
