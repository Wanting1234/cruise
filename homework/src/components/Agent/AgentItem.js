import React, {useState} from "react";
import './AgentItem.css'
import {Popup} from "./Popup";

export const AgentItem = ({agent, deleteResource, addResources}) => {
    const handleDelete = (id, index) => {
        deleteResource(id, index);
    };
    const [isInputShowed, setIsInputShowed] = useState(false)

    const toggle = () => {
        setIsInputShowed(false)
    }

    document.addEventListener("click", event => {
        const tDom = event.target;
        const aDom = document.getElementById(`add-button-${agent.id}`)
        if (tDom === aDom) {
            setIsInputShowed(true)
        }
        const cDom = document.querySelector("#form");
        if (cDom && !cDom.contains(tDom)) {
            setIsInputShowed(false)
        }
    })

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
                        <div className="add-section">
                        <button className="add-button" id={`add-button-${agent.id}`}>
                            <span className={"iconfont icon-plus"} id={`plus-${agent.id}`} ></span>
                        </button>
                        {isInputShowed &&
                            <Popup toggle={toggle} id={agent.id} addResources={addResources} />}
                        </div>
                        {agent.resources?.map((item, index) => (
                            <button className="resource-button" key={index}>
                                <span>{item}</span>
                                <span className="iconfont icon-trash"
                                      onClick={() => handleDelete(agent.id, index)}></span>
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
