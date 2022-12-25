import React from "react";

export function AgentInfo({name, status, ip, location}) {

    const AgentInfoDetail = ({detail, iconType}) => <div className="agent-info-detail">
        <span className={`iconfont icon-${iconType}`}></span>
        <span className={`${detail === name ? 'name' : null}`}>{detail}</span>
    </div>;

    return <div className="agent-info">
        <AgentInfoDetail detail={name} iconType={'desktop'}/>
        <div className={`info-label ${status === "building" ? "yellow" : "green"}`}>
            {status}
        </div>
        <AgentInfoDetail detail={ip} iconType={'info'}/>
        <AgentInfoDetail detail={location} iconType={'folder'}/>
    </div>;
}
