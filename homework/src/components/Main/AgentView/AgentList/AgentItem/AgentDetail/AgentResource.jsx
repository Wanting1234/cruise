import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectAgentById,
  updateAgent,
} from "../../../../../../features/agentsSlice";

export default function AgentResource({ resource, resourceIndex, agentId }) {
  const dispatch = useDispatch();
  const agent = useSelector((state) => selectAgentById(state, agentId));

  const handleDelete = async (initialAgent, index) => {
    const updatedAgent = {
      ...initialAgent,
      resources: initialAgent.resources.filter((_, i) => i !== index),
    };
    await dispatch(updateAgent(updatedAgent)).unwrap();
  };
  return (
    <button className="resource-button" data-testid={resource} type="button">
      <span>{resource}</span>
      <span
        className="iconfont icon-trash"
        role="presentation"
        data-testid={`del-${resource}`}
        onClick={() => handleDelete(agent, resourceIndex)}
      />
    </button>
  );
}
