import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AgentItem from "./AgentItem/AgentItem";
import { fetchAgents, selectAllAgents } from "../../../../features/agentsSlice";
import Menu from "./Menu/Menu";

export default function AgentList() {
  const agents = useSelector(selectAllAgents);
  const [filter, setFilter] = useState("All");
  const dispatch = useDispatch();
  const agentStatus = useSelector((state) => state.agents.fetchStatus);

  useEffect(() => {
    if (agentStatus === "idle") {
      dispatch(fetchAgents());
    }
  }, [agentStatus, dispatch]);

  const getVisibleAgents = () => {
    if (filter === "Physical") {
      return agents.filter((agent) => agent.type === "physical");
    }
    if (filter === "Virtual") {
      return agents.filter((agent) => agent.type === "virtual");
    }
    return agents;
  };
  const visibleAgents = getVisibleAgents();

  return (
    <section className="agent-list" data-testid="agent-list">
      <Menu filter={filter} setFilter={setFilter} />
      <div className="agent-list-section">
        <ul>
          {visibleAgents.map((agent) => (
            <li key={agent.id}>
              <AgentItem agentId={agent.id} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
