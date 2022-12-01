import React, {useState} from "react";
import './AgentItem.css'
import {Popup} from "./Popup";

export const AgentItem = ({agent, deleteResource, addResources}) => {
    const handleDelete = (id, index) => {
        deleteResource(id, index);
    };
    const [isInputShowed, setIsInputShowed] = useState(false)

    const toggleInput = () => {
        setIsInputShowed(!isInputShowed)
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
                            <button className="add-button" onClick={toggleInput}>
                                <span className="iconfont icon-plus"></span>
                            </button>
                            {isInputShowed && <Popup toggle={toggleInput} id={agent.id} addResources={addResources}/>}
                            {agent.resources.map((item, index) => (
                                <button className="resource-button" key={index}>
                                    <span>{item}</span>
                                    <span className="iconfont icon-trash" onClick={() => handleDelete(agent.id, index)}></span>
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
