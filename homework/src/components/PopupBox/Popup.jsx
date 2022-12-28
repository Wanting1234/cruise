import React, { useState } from 'react';
import './Popup.css';
import { useDispatch, useSelector } from 'react-redux';
import { setIsPopupShow } from '../../features/popupSlice';
import { selectAgentById, updateAgent } from '../../features/agentsSlice';

export default function Popup() {
  const [inputText, setInputText] = useState('');
  const agentId = useSelector((state) => state.agents.selectedAgent);
  const agent = useSelector((state) => selectAgentById(state, agentId));
  const position = useSelector((state) => state.popup.position);
  const left = position.x;
  const top = position.y;
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const content = e.target.value.trim();
    setInputText(content);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const addResources = inputText.split(',').map((item) => item.trim()).filter((item) => item !== '');
    if (agent && addResources.length > 0) {
      const updatedAgent = {
        ...agent,
        resources: agent.resources.concat(addResources),
      };
      await dispatch(updateAgent(updatedAgent)).unwrap();
    }
    dispatch(setIsPopupShow(false));
  };

  const handleCancel = (e) => {
    e.preventDefault();
    setInputText('');
    dispatch(setIsPopupShow(false));
  };

  return (
    <>
      {/* eslint-disable-next-line max-len */}
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
      <section className="popup-box" data-testid="popup-box" onClick={handleCancel} />
      <div className="add-input-content" id="add-input-content-res" style={{ left, top }}>
        {/* eslint-disable-next-line max-len */}
        {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
        <span className="iconfont icon-close" onClick={handleCancel} />
        <form id="form">
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label>
            Separate multiple resource name with commas
            <br />
            <input
              className="add-input"
              type="text"
              placeholder="e.g.Chrome,Firefox"
              onChange={handleChange}
            />
          </label>
          <br />
          <button className="add-resources" onClick={handleSubmit} type="button">Add Resources</button>
          <button className="cancel" onClick={handleCancel} type="button">Cancel</button>
        </form>
      </div>
    </>
  );
}
