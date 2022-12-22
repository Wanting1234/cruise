import React from "react";

export function AgentInfo(props) {
    // todo: duplicated code(extract component)
    // todo: mysterious name
    return <div className="agent-info">
        <div className="name-with-icon">
            <span className="iconfont icon-desktop"></span>
            <span className="name">{props.name}</span>
        </div>
        <div className={`info-label ${props.status === "building" ? "yellow" : "green"}`}>
            {props.status}
        </div>
        <div className="ip-with-icon">
            <span className="iconfont icon-info"></span>
            <span>{props.ip}</span>
        </div>
        <div className="location-with-icon">
            <span className="iconfont icon-folder"></span>
            <span>{props.location}</span>
        </div>
    </div>;
}
