import React from "react";
import {useDispatch} from "react-redux";
import {updateAgent} from "../../../../../../../features/agentsSlice";

export const AgentResource = ({agent}) => {
    const dispatch = useDispatch();
    const handleDelete = async (agent, index) => {
        const updatedAgent = {
            ...agent,
            resources: agent.resources.filter((_, i) => i !== index)
        }
        await dispatch(updateAgent(updatedAgent)).unwrap();
    };
    return (
        agent.resources.map((resource, index) =>
            <button className="resource-button" key={index} data-testid={resource}>
                <span>{resource}</span>
                <span className="iconfont icon-trash" data-testid={`del-${resource}`} onClick={() => handleDelete(agent, index)}></span>
            </button>
        )
    )
}
