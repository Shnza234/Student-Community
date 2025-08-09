// src/pages/ThreadDetail.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { threads } from '../data/threads.js';

export default function ThreadDetail() {
  const { id } = useParams();
  const thread = threads.find(t => t.id === id);
  if (!thread) {
    return (
      <div className="container section">
        <h1>Thread not found</h1>
        <Link to="/forum" className="link">Back to forum</Link>
      </div>
    );
  }
  return (
    <div className="container section">
      <Link to="/forum" className="link">← Forum</Link>
      <h1>{thread.title}</h1>
      <div className="muted">by {thread.author} • {thread.replies} replies</div>
      <div className="card">
        <div className="card-body">
          <p>{thread.snippet}</p>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <h3 className="card-title">Reply</h3>
          <textarea className="input" rows="4" placeholder="Share your thoughts..." />
          <button className="btn" style={{ marginTop: 8 }}>Post reply</button>
        </div>
      </div>
    </div>
  );
}
