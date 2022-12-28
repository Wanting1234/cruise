import React from 'react';
import './AgentView.css';
import AgentList from './AgentList/AgentList';
import OverView from './OverView/OverView';

function AgentView() {
  return (
    <div className="content" role="region">
      <OverView />
      <AgentList />
    </div>
  );
}

export default AgentView;
