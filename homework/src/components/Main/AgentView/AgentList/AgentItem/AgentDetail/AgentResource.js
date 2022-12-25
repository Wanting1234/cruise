import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {selectAgentById, updateAgent} from "../../../../../../features/agentsSlice";

export const AgentResource = ({resource, resourceIndex, agentId}) => {
    const dispatch = useDispatch();
    const agent = useSelector((state) => selectAgentById(state, agentId))

    const handleDelete = async (agent, index) => {
        const updatedAgent = {
            ...agent,
            resources: agent.resources.filter((_, i) => i !== index)
        }
        await dispatch(updateAgent(updatedAgent)).unwrap();
    };
    return (
            <button className="resource-button" data-testid={resource}>
                <span>{resource}</span>
                <span className="iconfont icon-trash" data-testid={`del-${resource}`} onClick={() => handleDelete(agent, resourceIndex)}></span>
            </button>
    )
}
