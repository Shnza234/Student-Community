// src/pages/EventDetail.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { events } from '../data/events.js';

export default function EventDetail() {
  const { id } = useParams();
  const event = events.find(e => e.id === id);
  if (!event) {
    return (
      <div className="container section">
        <h1>Event not found</h1>
        <Link to="/events" className="link">Back to events</Link>
      </div>
    );
  }
  return (
    <div className="container section">
      <Link to="/events" className="link">← All events</Link>
      <h1>{event.title}</h1>
      <p className="muted">{event.date} • {event.location}</p>
      <p>{event.blurb}</p>
      <div className="card">
        <div className="card-body">
          <h3 className="card-title">RSVP</h3>
          <p>Spots are limited. Save your place.</p>
          <button className="btn">RSVP now</button>
        </div>
      </div>
    </div>
  );
}
