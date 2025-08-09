// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/Card.jsx';
import { events } from '../data/events.js';
import { clubs } from '../data/clubs.js';
import { threads } from '../data/threads.js';

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero-inner">
          <h1>Find your people. Show up. Make it count.</h1>
          <p className="lead">Discover events, join clubs, and jump into conversations across campus.</p>
          <div className="hero-cta">
            <Link to="/events" className="btn">Explore events</Link>
            <Link to="/clubs" className="btn btn-ghost">Find a club</Link>
          </div>
        </div>
      </section>

      <section className="container section">
        <h2>Upcoming events</h2>
        <div className="grid">
          {events.map(e => (
            <Card key={e.id} to={`/events/${e.id}`} title={e.title} subtitle={e.blurb} meta={`${e.date} • ${e.location}`} />
          ))}
        </div>
        <div className="section-cta">
          <Link to="/events" className="link">See all events →</Link>
        </div>
      </section>

      <section className="container section">
        <h2>Featured clubs</h2>
        <div className="grid">
          {clubs.map(c => (
            <Card key={c.id} to={`/clubs/${c.id}`} title={c.name} subtitle={c.about} meta={`${c.members} members`} />
          ))}
        </div>
        <div className="section-cta">
          <Link to="/clubs" className="link">Browse all clubs →</Link>
        </div>
      </section>

      <section className="container section">
        <h2>What’s buzzing</h2>
        <div className="grid">
          {threads.map(t => (
            <Card key={t.id} to={`/forum/${t.id}`} title={t.title} subtitle={t.snippet} meta={`by ${t.author} • ${t.replies} replies`} />
          ))}
        </div>
        <div className="section-cta">
          <Link to="/forum" className="link">Enter the forum →</Link>
        </div>
      </section>
    </>
  );
}
