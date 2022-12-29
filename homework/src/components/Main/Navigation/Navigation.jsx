import React, { useState } from "react";
import "./Navigation.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setIsNavigationShow } from "../../../features/navigationSlice";
import HistoryList from "./History/HistoryList";

function Navigation() {
  const menu = [
    { id: "1", icon: "icon-dashboard", name: "DASHBOARD" },
    { id: "2", icon: "icon-sitemap", name: "AGENT" },
    { id: "3", icon: "icon-boat", name: "MY CRUISE" },
    { id: "4", icon: "icon-life-bouy", name: "HELP" },
  ];
  const [active, setActive] = useState("AGENT");
  const dispatch = useDispatch();

  return (
    <div className="navigation" role="navigation">
      <span
        className="icon-close"
        role="presentation"
        onClick={() => {
          dispatch(setIsNavigationShow(false));
        }}
      />
      <section className="navigation-message">
        <ul>
          {menu.map((item) => (
            <li
              className={`nav ${active === item.name ? "active-li" : ""}`}
              key={item.id}
            >
              <Link
                to={`${item.name.toLowerCase()}`}
                className={`link ${active === item.name ? "active-li" : ""}`}
                onClick={() => setActive(item.name)}
              >
                <span className={`iconfont ${item.icon}`} />
                <span>{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <HistoryList />
    </div>
  );
}

export default Navigation;
