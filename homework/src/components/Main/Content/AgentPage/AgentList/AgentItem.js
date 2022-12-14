import React from "react";
import './AgentItem.css'
import windows from '../../../../../images/os icons/windows.png'
import ubuntu from '../../../../../images/os icons/ubuntu.png'
import debian from '../../../../../images/os icons/debin.png'
import suse from '../../../../../images/os icons/suse.png'
import centos from '../../../../../images/os icons/cent_os.png'
import {AgentInfo} from "./AgentInfo";
import {AgentOperation} from "./AgentOperation";

export const AgentItem = ({agent}) => {
    const menu = {windows, ubuntu, debian, suse, centos}

    return (
        <div key={agent.id} className="agent-item">
            <div className="agent-os">
                <span>
                    <img src={menu[agent.os]} alt="agent-os" className="agent-os"/>
                </span>
            </div>
            <div className="agent-detail">
                <AgentInfo name={agent.name} status={agent.status} ip={agent.ip} location={agent.location}/>
                <AgentOperation agent={agent} />
            </div>
        </div>
    );
}
