import React from "react";
import "./Card.css";

export default function Status({ status, num }) {
  return (
    <section className={`card ${status === "building" ? "yellow" : "green"}`}>
      <h1>{status}</h1>
      <div
        className={`iconfont ${
          status === "building" ? "icon-cog" : "icon-coffee"
        }`}
      />
      <p data-testid={`${status}`}>{num}</p>
    </section>
  );
}
