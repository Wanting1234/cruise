import React from "react";
import "./AgentItem.css";
import { useSelector } from "react-redux";
import windows from "../../../../../images/os icons/windows.png";
import ubuntu from "../../../../../images/os icons/ubuntu.png";
import debian from "../../../../../images/os icons/debin.png";
import suse from "../../../../../images/os icons/suse.png";
import centos from "../../../../../images/os icons/cent_os.png";
import AgentInfo from "./AgentDetail/AgentInfo";
import AgentOperation from "./AgentDetail/AgentOperation";
import { selectAgentById } from "../../../../../features/agentsSlice";

export default function AgentItem({ agentId }) {
  const menu = {
    windows,
    ubuntu,
    debian,
    suse,
    centos,
  };
  const agent = useSelector((state) => selectAgentById(state, agentId));

  return (
    <div
      key={agent.id}
      className={`agent-item ${
        agent.status === "building" ? "yellow-item" : "green-item"
      }`}
    >
      <div className="agent-os">
        <img src={menu[agent.os]} alt="agent-os" className="agent-os" />
      </div>
      <div className="agent-detail">
        <AgentInfo
          name={agent.name}
          status={agent.status}
          ip={agent.ip}
          location={agent.location}
        />
        <AgentOperation agent={agent} />
      </div>
    </div>
  );
}
