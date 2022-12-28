import React from 'react';
import './Navbar.css';

export default function Navbar({ filter, setFilter }) {
  const tabList = ['All', 'Physical', 'Virtual'];
  const active = filter;

  return (
    <div className="nav-tab">
      {tabList.map((item) => (
        // eslint-disable-next-line max-len
        // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
        <div
          key={item}
          className={`nav-tab-item ${active === item ? 'active' : ''}`}
          data-testid={`${item}`}
          onClick={() => setFilter(item)}
        >
          <span>{item}</span>
        </div>
      ))}
    </div>
  );
}
