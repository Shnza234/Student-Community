// src/components/Navbar.jsx
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';

export default function Navbar() {
  const { user, signOut } = useAuth();
  return (
    <header className="nav">
      <div className="container nav-inner">
        <Link to="/" className="brand">Campus Connect</Link>
        <nav className="nav-links">
          <NavLink to="/events">Events</NavLink>
          <NavLink to="/clubs">Clubs</NavLink>
          <NavLink to="/resources">Resources</NavLink>
          <NavLink to="/forum">Groupchats</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
        <div className="nav-auth">
          {user ? (
            <>
              <NavLink to="/profile" className="btn btn-ghost">Hi, {user.name}</NavLink>
              <button className="btn" onClick={signOut}>Sign out</button>
            </>
          ) : (
            <>
              <NavLink to="/sign-in" className="btn btn-ghost">Sign in</NavLink>
              <NavLink to="/sign-up" className="btn">Sign up</NavLink>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
