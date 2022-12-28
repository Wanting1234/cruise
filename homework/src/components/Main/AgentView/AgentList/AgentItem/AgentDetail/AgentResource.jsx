import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAgentById, updateAgent } from '../../../../../../features/agentsSlice';

export default function AgentResource({ resource, resourceIndex, agentId }) {
  const dispatch = useDispatch();
  const agent = useSelector((state) => selectAgentById(state, agentId));

  // eslint-disable-next-line no-shadow
  const handleDelete = async (agent, index) => {
    const updatedAgent = {
      ...agent,
      resources: agent.resources.filter((_, i) => i !== index),
    };
    await dispatch(updateAgent(updatedAgent)).unwrap();
  };
  return (
    <button className="resource-button" data-testid={resource} type="button">
      <span>{resource}</span>
      {/* eslint-disable-next-line max-len */}
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
      <span className="iconfont icon-trash" data-testid={`del-${resource}`} onClick={() => handleDelete(agent, resourceIndex)} />
    </button>
  );
}
