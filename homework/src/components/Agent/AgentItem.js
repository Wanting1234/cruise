import React from "react";
import './AgentItem.css'
import {useDispatch} from "react-redux";
import {updateAgent} from "../../features/agentSlice";
import {selectCurrentAgentId} from "../../features/selectedAgentIdSlice";
import {setPopupBoxState} from "../../features/popupSlice";

export const AgentItem = ({agent}) => {
    const dispatch = useDispatch();

    const handleDelete = async (agent, index) => {
        const updatedAgent = {
            ...agent,
            resources: agent.resources.filter((_, i) => i !== index)
        }
        await dispatch(updateAgent(updatedAgent)).unwrap();
    };

    function handleAdd(id) {
        dispatch(selectCurrentAgentId(id))
        dispatch(setPopupBoxState(true))
    }

    return (
        <div key={agent.id} className="agent-item">
            <div className="agent-detail">
                <div className="agent-info">
                    <div className="name-with-icon">
                        <span className="iconfont icon-desktop"></span>
                        <span className="name">{agent.name}</span>
                    </div>
                    <div className={`info-label ${agent.status === 'building' ? 'yellow' : 'green'}`}>
                        {agent.status}
                    </div>
                    <div className="ip-with-icon">
                        <span className="iconfont icon-info"></span>
                        <span>{agent.ip}</span>
                    </div>
                    <div className="location-with-icon">
                        <span className="iconfont icon-folder"></span>
                        <span>{agent.location}</span>
                    </div>
                </div>
                <div className="agent-operation">
                    <div className="operation-group">
                        <button className="add-button" id={`add-button-${agent.id}`}
                                onClick={() => handleAdd(agent.id)}>
                            <span className={"iconfont icon-plus"} id={`plus-${agent.id}`}></span>
                        </button>
                        {agent.resources?.map((item, index) => (
                            <button className="resource-button" key={index}>
                                <span>{item}</span>
                                <span className="iconfont icon-trash"
                                      onClick={() => handleDelete(agent, index)}
                                ></span>
                            </button>
                        ))
                        }
                    </div>
                    {agent.status === 'building' ?
                        <button className="deny-button">
                            <span className="iconfont icon-deny"></span>
                            <span>Deny</span>
                        </button> : null}
                </div>
            </div>
        </div>
    );
}
