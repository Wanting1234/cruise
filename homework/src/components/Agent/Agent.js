import React, {useEffect, useState} from "react";
import './Agent.css'
import {StatusCard} from "./StatusCard";
import {StatisticsCard} from "./StatisticsCard";
import {Navbar} from "./Navbar";
import {InputSearch} from "./InputSearch";
import {getAgents, patchAgent} from "../../api/api";
import {AgentItem} from "./AgentItem";

const Agent = () => {
    const [agents, setAgents] = useState([])

    const fetchAgents = () => {
        getAgents().then((data) => setAgents(data));
    };

    useEffect(() => {
        fetchAgents();
    }, []);

    const triggerDeleteResource = (id, index) => {
        const newAgentListAfterDelete = agents.map(agent => {
            if (agent.id === id) {
                agent.resources.splice(index, 1);
                patchAgent(agent).then(() => fetchAgents());
            }
            return agent;
        })
        setAgents(newAgentListAfterDelete)
    }

    const triggerAddResource = (id, resources) => {
        const addResources = resources.split(',').map(item => item.trim()).filter(item => item !== '');
        const newAgentListAfterAdd = agents.map(agent => {
            if (agent.id === id) {
                agent.resources = agent.resources.concat(addResources)
                patchAgent(agent).then(() => fetchAgents())
            }
            return agent;
        })
        setAgents(newAgentListAfterAdd)
    }

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
                <ul>
                    {agents.map((agent) => (
                        <AgentItem key={agent.id} agent={agent}
                                   deleteResource={(id, index) => triggerDeleteResource(id, index)}
                                   addResources={(id, resources) => triggerAddResource(id, resources)}/>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Agent
