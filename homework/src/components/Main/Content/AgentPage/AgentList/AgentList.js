import React, {useEffect} from "react";
import {AgentItem} from "./AgentItem/AgentItem";
import {useDispatch, useSelector} from "react-redux";
import {fetchAgents, selectAllAgents} from "../../../../../features/agentSlice";
import {Menu} from "./Menu/Menu";


export const AgentList = () => {
    const agents = useSelector(selectAllAgents)
    const filter = useSelector((state) => state.filter)

    const dispatch = useDispatch()
    const agentStatus = useSelector(state => state.agents.fetchStatus)

    useEffect(() => {
        if (agentStatus === 'idle') {
            dispatch(fetchAgents())
        }
    }, [agentStatus, dispatch])

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
        <>
        <Menu />
        <div className="agent-list">
            <ul>
                {visibleAgents.map((agent) => (<li key={agent.id}>
                    <AgentItem agent={agent}/>
                </li>))}
            </ul>
        </div>
        </>
    );
}

