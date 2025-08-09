// src/pages/Groupchats.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { threads } from '../data/threads.js';

export default function Groupchats() {
  return (
    <div className="container section">
      <div className="stack">
        <h1>Groupchats</h1>
        <div>
          <button className="btn">Start a groupchat</button>
        </div>
      </div>
      <ul className="list">
        {threads.map(t => (
          <li key={t.id} className="list-item">
            <Link to={`/groupchats/${t.id}`} className="list-title">{t.title}</Link>
            <div className="list-meta">by {t.author} • {t.replies} replies</div>
            <div className="list-snippet">{t.snippet}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
