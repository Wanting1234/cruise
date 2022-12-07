import React from "react";
import {AgentItem} from "./AgentItem";


export const AgentList = ({agents, filter, addResources, deleteResource }) => {
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

    return(
        <ul>
            {visibleAgents.map((agent) => (<li key={agent.id}>
                <AgentItem agent={agent}
                           deleteResource={(id, index) => deleteResource(id, index)}
                           addResources={(id, resources) => addResources(id, resources)}/>
            </li>))}
        </ul>
    );
}

