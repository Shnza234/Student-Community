// src/pages/Resources.jsx
import React from 'react';

export default function Resources() {
  const resources = [
    { title: 'Study Groups', desc: 'Find or form a study group by course.' },
    { title: 'Wellbeing', desc: 'Counselling, mental health, and support services.' },
    { title: 'Careers', desc: 'CV templates, interview prep, job boards.' },
    { title: 'Funding & Grants', desc: 'Scholarships, grants, and bursaries.' }
  ];
  return (
    <div className="container section">
      <h1>Resources</h1>
      <div className="grid">
        {resources.map((r) => (
          <div key={r.title} className="card">
            <div className="card-body">
              <h3 className="card-title">{r.title}</h3>
              <p>{r.desc}</p>
              <button className="btn btn-ghost">Learn more</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
