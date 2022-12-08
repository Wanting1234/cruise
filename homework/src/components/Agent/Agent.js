import React, {useEffect, useState} from "react";
import './Agent.css'
import {StatusCard} from "./StatusCard";
import {StatisticsCard} from "./StatisticsCard";
import {Navbar} from "./Navbar";
import {InputSearch} from "./InputSearch";
import {AgentList} from "./AgentList";
import {useDispatch, useSelector} from "react-redux";
import {fetchAgents, selectAllAgents} from "../../features/agentSlice";

const Agent = () => {
    const [filter, setFilter] = useState('All')
    const dispatch = useDispatch()
    const agents = useSelector(selectAllAgents)

    const agentStatus = useSelector(state => state.agents.status)

    useEffect(() => {
        if (agentStatus === 'idle') {
            dispatch(fetchAgents())
        }
    }, [agentStatus, dispatch])


    const triggerDeleteResource = (id, index) => {
        const newAgentListAfterDelete = agents.map(agent => {
            if (agent.id === id) {
                agent.resources.splice(index, 1);
            }
            return agent;
        })
    }

    const triggerAddResource = (id, resources) => {
        const addResources = resources.split(',').map(item => item.trim()).filter(item => item !== '');
        const newAgentListAfterAdd = agents.map(agent => {
            if (agent.id === id) {
                agent.resources = agent.resources.concat(addResources)
            }
            return agent;
        })
    }

    const buildingNum = agents.filter((agent) => agent.status === 'building').length;
    const idleNum = agents.filter((agent) => agent.status === 'idle').length;
    const physicalNum = agents.filter((agent) => agent.type === 'physical').length;
    const virtualNum = agents.filter((agent) => agent.type === 'virtual').length;

    const changeFilter = (filterName) => {
        setFilter(filterName);
    };

    return (
        <div className="agent">
            <div className="agent-overview">
                <StatusCard status="building" num={buildingNum}/>
                <StatusCard status="idle" num={idleNum}/>
                <StatisticsCard physicalNum={physicalNum} virtualNum={virtualNum}/>
            </div>
            <div className="agent-navbar">
                <Navbar changeFilter={changeFilter}/>
                <InputSearch/>
                <div className="iconfont icon-type icon-th-card"></div>
                <div className="iconfont icon-type icon-th-list active"></div>
            </div>
            <div className="agent-list">
                <AgentList agents={agents} filter={filter}
                           deleteResource={(id, index) => triggerDeleteResource(id, index)}
                           addResources={(id, resources) => {
                               triggerAddResource(id, resources)
                           }}/>
            </div>
        </div>
    )
}

export default Agent
