import React, {useEffect, useState} from "react";
import './Agent.css'
import {StatusCard} from "./StatusCard";
import {StatisticsCard} from "./StatisticsCard";
import {Navbar} from "./Navbar";
import {InputSearch} from "./InputSearch";
import {getAgents} from "../../api/api";
import {AgentItem} from "./AgentItem";

const Agent = () => {
    const [agents, setAgents] = useState([])

    const fetchAgents = () => {
        getAgents().then((data) => setAgents(data));
    };

    useEffect(() => {
        fetchAgents();
    }, []);

    return (
        <div className="agent">
            <div className="agent-overview">
                <StatusCard status="building" num={3}/>
                <StatusCard status="idle" num={5}/>
                <StatisticsCard physicalNum={4} virtualNum={4}/>
            </div>
            <div className="agent-navbar">
                <Navbar/>
                <InputSearch/>
                <div className="iconfont icon-type icon-th-card"></div>
                <div className="iconfont icon-type icon-th-list active"></div>
            </div>
            <div className="agent-list">
                <AgentItem agents={agents}/>
            </div>
        </div>
    )
}

export default Agent
