import React from "react";
import './Agent.css'
import {StatusCard} from "./StatusCard";
import {StatisticsCard} from "./StatisticsCard";
import {Navbar} from "./Navbar";
import {InputSearch} from "./InputSearch";

const Agent = () => {
    return (
        <div className="agent">
            <div className="agent-overview">
                <StatusCard status="building" num={3} />
                <StatusCard status="idle" num={5} />
                <StatisticsCard physicalNum={4} virtualNum={4} />
            </div>
            <div className="agent-navbar">
            <Navbar />
            <InputSearch />
            <div className="iconfont icon-type icon-th-card"></div>
            <div className="iconfont icon-type icon-th-list active"></div>
            </div>
        </div>
    )
}

export default Agent
