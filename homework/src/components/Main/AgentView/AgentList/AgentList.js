import React, {useEffect, useState} from "react";
import {AgentItem} from "./AgentItem/AgentItem";
import {useDispatch, useSelector} from "react-redux";
import {fetchAgents, selectAllAgents} from "../../../../features/agentsSlice";
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
        // todo: only transfer agentId to AgentItem component and add a method to get agent by its id

        <section className="agent-list" data-testid="agent-list">
        <Menu filter={filter} setFilter={setFilter}/>
        <div className="agent-list-section">
            <ul>
                {visibleAgents.map((agent) => (<li key={agent.id}>
                    <AgentItem agent={agent}/>
                </li>))}
            </ul>
        </div>
        </section>
    );
}

