import React from "react";
import {AgentItem} from "./AgentItem";
import {useSelector} from "react-redux";
import {selectAllAgents} from "../../features/agentSlice";


export const AgentList = ({filter}) => {
    const agents = useSelector(selectAllAgents)

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
        <ul>
            {visibleAgents.map((agent) => (<li key={agent.id}>
                <AgentItem agent={agent}/>
            </li>))}
        </ul>
    );
}

