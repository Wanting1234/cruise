import React from "react";

function AgentInfoDetail({ detail, iconType, name }) {
  return (
    <div className="agent-info-detail">
      <span className={`iconfont icon-${iconType}`} />
      <span className={`${detail === name ? "name" : null}`}>{detail}</span>
    </div>
  );
}

export default function AgentInfo({ name, status, ip, location }) {
  return (
    <div className="agent-info">
      <AgentInfoDetail detail={name} iconType="desktop" name={name} />
      <div
        className={`info-label ${status === "building" ? "yellow" : "green"}`}
      >
        {status}
      </div>
      <AgentInfoDetail detail={ip} iconType="info" />
      <AgentInfoDetail detail={location} iconType="folder" />
    </div>
  );
}
