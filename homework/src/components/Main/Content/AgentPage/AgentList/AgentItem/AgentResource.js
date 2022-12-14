import React from "react";
import {useDispatch} from "react-redux";
import {updateAgent} from "../../../../../../features/agentSlice";

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
            <button className="resource-button" key={index}>
                <span>{resource}</span>
                <span className="iconfont icon-trash" onClick={() => handleDelete(agent, index)}></span>
            </button>
        )
    )
}
