import React, {useState} from "react";
import './AgentItem.css'
import {Popup} from "./Popup";

export const AgentItem = ({agent, deleteResource, addResources}) => {
    const handleDelete = (id, index) => {
        deleteResource(id, index);
    };
    const [isInputShowed, setIsInputShowed] = useState(false)
    const [top, setTop] = useState(0);
    const [left, setLeft] = useState(0);

    const toggle = () => {
        setIsInputShowed(false)
    }

    const setInputPosition = (e) => {
        const box = e.target.getBoundingClientRect();
        const top = box.top - box.height;
        const left = box.left - 205;
        setTop(top)
        setLeft(left)
    }

    document.addEventListener("click", event => {
        const tDom = event.target;
        const aDom = document.getElementById(`plus-${agent.id}`);

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
                        <button className="add-button">
                            {/*<span className="iconfont icon-plus"></span>*/}
                            <span className={"iconfont icon-plus"} id={`plus-${agent.id}`} onClick={setInputPosition} ></span>

                        </button>
                        {isInputShowed &&
                            <Popup toggle={toggle} id={agent.id} addResources={addResources} top={top}
                                   left={left}/>}
                        {agent.resources.map((item, index) => (
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
