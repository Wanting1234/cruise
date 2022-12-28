import React from 'react';
import { Link } from 'react-router-dom';
import './OtherView.css';

export default function OtherView({ match }) {
  return (
    <section className="content-page" role="banner">
      <h1>
        {match}
        {' '}
        Loading...
      </h1>
      <button className="esc-btn" type="button"><Link to="/" className="back-link">esc</Link></button>
    </section>
  );
}
