import React, {useEffect, useState} from "react";
import {AgentItem} from "./AgentItem/AgentItem";
import {useDispatch, useSelector} from "react-redux";
import {fetchAgents, selectAllAgents} from "../../../../../features/agentsSlice";
import {Menu} from "./Menu/Menu";


export const AgentList = () => {
    const agents = useSelector(selectAllAgents)
    const [filter, setFilter] = useState('All')
    const dispatch = useDispatch()
    const agentStatus = useSelector(state => state.agents.fetchStatus)

    useEffect(() => {
        if (agentStatus === 'idle') {
            dispatch(fetchAgents())
        }
    }, [])

    const getVisibleAgents = () => {
        if (filter === "Physical") {
            return agents.filter((agent) => agent.type === 'physical');
        }
        if (filter === "Virtual") {
            return agents.filter((agent) => agent.type === 'virtual');
        }
        return agents;
    };
    const visibleAgents = getVisibleAgents();

    return (
        // todo: mysterious name(use testId rather than role)
        // todo: mysterious name('list' could be changed to 'agent-list-section')
        // todo: only transfer agentId to AgentItem component and add a method to get agent by its id

        <section className="agent-list" role="region" aria-label="agent-list">
        <Menu filter={filter} setFilter={setFilter}/>
        <div className="list">
            <ul>
                {visibleAgents.map((agent) => (<li key={agent.id}>
                    <AgentItem agent={agent}/>
                </li>))}
            </ul>
        </div>
        </section>
    );
}

