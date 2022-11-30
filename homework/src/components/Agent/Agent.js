import React from "react";
import './Agent.css'
import {StatusCard} from "./StatusCard";
import {StatisticsCard} from "./StatisticsCard";

const Agent = () => {
    return (
        <div className="agent">
            <div className="agent-overview">
                <StatusCard status="building" num={3} />
                <StatusCard status="idle" num={5} />
                <StatisticsCard physicalNum={4} virtualNum={4} />
            </div>
        </div>
    )
}

export default Agent
