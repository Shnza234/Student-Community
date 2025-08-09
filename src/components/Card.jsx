// src/components/Card.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function Card({ to, title, subtitle, meta, children }) {
  return (
    <Link to={to} className="card">
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        {subtitle && <p className="card-subtitle">{subtitle}</p>}
        {children}
        {meta && <div className="card-meta">{meta}</div>}
      </div>
    </Link>
  );
}
