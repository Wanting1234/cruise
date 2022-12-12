import React, {useEffect} from "react";
import './Agent.css'
import {StatusCard} from "./StatusCard";
import {StatisticsCard} from "./StatisticsCard";
import {Navbar} from "./Navbar";
import {InputSearch} from "./InputSearch";
import {AgentList} from "./AgentList";
import {useDispatch, useSelector} from "react-redux";
import {fetchAgents, selectAllAgents} from "../../features/agentSlice";

const Agent = () => {
    const dispatch = useDispatch()
    const agents = useSelector(selectAllAgents)
    const agentStatus = useSelector(state => state.agents.fetchStatus)

    useEffect(() => {
        if (agentStatus === 'idle') {
            dispatch(fetchAgents())
        }
    }, [agentStatus, dispatch])

    const buildingNum = agents.filter((agent) => agent.status === 'building').length;
    const idleNum = agents.filter((agent) => agent.status === 'idle').length;
    const physicalNum = agents.filter((agent) => agent.type === 'physical').length;
    const virtualNum = agents.filter((agent) => agent.type === 'virtual').length;

    return (
        <div className="agent">
            <div className="agent-overview">
                <StatusCard status="building" num={buildingNum}/>
                <StatusCard status="idle" num={idleNum}/>
                <StatisticsCard physicalNum={physicalNum} virtualNum={virtualNum}/>
            </div>
            <div className="agent-navbar">
                <Navbar />
                <InputSearch/>
                <div className="iconfont icon-type icon-th-card"></div>
                <div className="iconfont icon-type icon-th-list active"></div>
            </div>
            <div className="agent-list">
                <AgentList />
            </div>
        </div>
    )
}

export default Agent
