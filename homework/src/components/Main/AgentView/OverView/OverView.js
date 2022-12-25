import {Status} from "./Status";
import Statistics from "./Statistics";
import React from "react";
import {useSelector} from "react-redux";
import {selectAllAgents} from "../../../../features/agentsSlice";

export const OverView = () => {
    const agents = useSelector(selectAllAgents)
    // todo: duplicated code(extract function)
    const buildingNum = agents.filter((agent) => agent.status === 'building').length;
    const idleNum = agents.filter((agent) => agent.status === 'idle').length;
    const physicalNum = agents.filter((agent) => agent.type === 'physical').length;
    const virtualNum = agents.filter((agent) => agent.type === 'virtual').length;

    return (
        <div className="overview" data-testid="overview">
            <Status status="building" num={buildingNum}/>
            <Status status="idle" num={idleNum}/>
            <Statistics physicalNum={physicalNum} virtualNum={virtualNum}/>
        </div>);
}


