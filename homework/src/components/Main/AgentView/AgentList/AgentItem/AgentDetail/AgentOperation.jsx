import React from 'react';
import { useDispatch } from 'react-redux';
import { selectCurrentAgentId } from '../../../../../../features/agentsSlice';
import { setIsPopupShow, setPosition } from '../../../../../../features/popupSlice';
import AgentResource from './AgentResource';

export default function AgentOperation({ agent }) {
  const dispatch = useDispatch();

  const getPopupPosition = (event) => {
    let selectedElm = event.target;
    if (selectedElm === document.querySelector(`#plus-${agent.id}`)) {
      selectedElm = selectedElm.parentNode;
    }

    const addButton = selectedElm.getBoundingClientRect();
    const x = addButton.left - addButton.width / 2;
    const y = addButton.top + addButton.height * 1.5;
    return { x, y };
  };

  const handleAdd = (id, e) => {
    dispatch(selectCurrentAgentId(id));

    const popupPosition = getPopupPosition(e);

    dispatch(setPosition(popupPosition));
    dispatch(setIsPopupShow(true));
  };

  return (
    <div className="agent-operation">
      <div className="operation-group">
        <button
          className="add-button"
          type="button"
          data-testid={`add-button-${agent.id}`}
          onClick={(event) => handleAdd(agent.id, event)}
        >
          <span className="iconfont icon-plus" id={`plus-${agent.id}`} />
        </button>
        <section className="agent-resources">
          {agent.resources && agent.resources.map((resource, index) => (
            // eslint-disable-next-line max-len
            <AgentResource resource={resource} resourceIndex={index} agentId={agent.id} key={resource} />
          ))}
        </section>
      </div>
      <div className="agent-deny">
        {agent.status === 'building'
          ? (
            <button className="deny-button" type="button">
              <span className="iconfont icon-deny" />
              <span>Deny</span>
            </button>
          ) : null}
      </div>
    </div>
  );
}
