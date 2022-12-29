import React from "react";
import "./Navbar.css";

export default function Navbar({ filter, setFilter }) {
  const tabList = ["All", "Physical", "Virtual"];
  const active = filter;

  return (
    <div className="nav-tab">
      {tabList.map((item) => (
        <div
          key={item}
          role="presentation"
          className={`nav-tab-item ${active === item ? "active" : ""}`}
          data-testid={`${item}`}
          onClick={() => setFilter(item)}
        >
          <span>{item}</span>
        </div>
      ))}
    </div>
  );
}
