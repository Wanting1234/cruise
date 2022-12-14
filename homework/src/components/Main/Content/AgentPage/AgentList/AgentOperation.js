import React from "react";
import {useDispatch} from "react-redux";
import {updateAgent} from "../../../../../features/agentSlice";
import {selectCurrentAgentId} from "../../../../../features/selectedAgentIdSlice";
import {setPopupBoxState} from "../../../../../features/popupSlice";
import {setPosition} from "../../../../../features/positionSlice";

export const AgentOperation = ({agent}) => {
    const dispatch = useDispatch();
    const handleDelete = async (agent, index) => {
        const updatedAgent = {
            ...agent,
            resources: agent.resources.filter((_, i) => i !== index)
        }
        await dispatch(updateAgent(updatedAgent)).unwrap();
    };

    const getPosition = event => {
        let selectedElm = event.target
        // if (selectedElm === document.querySelector(`#plus-${agent.id}`)) {
        //     selectedElm = selectedElm.closest(document.querySelector(`#add-button-${agent.id}`))
        // }
        const box = selectedElm.getBoundingClientRect()
        const x = box.left - box.width / 2
        const y = box.top + box.height * 1.5
        return {x, y};
    };

    const handleAdd = (id, e) => {
        dispatch(selectCurrentAgentId(id))
        dispatch(setPopupBoxState(true))

        const {x, y} = getPosition(e);
        dispatch(setPosition({x, y}))
    };

    return(
        <div className="agent-operation">
            <div className="operation-group">
                <button className="add-button" id={`add-button-${agent.id}`}
                        onClick={(event) => handleAdd(agent.id, event)}>
                    <span className={"iconfont icon-plus"} id={`plus-${agent.id}`}></span>
                </button>
                {agent.resources?.map((item, index) => (
                    <button className="resource-button" key={index}>
                        <span>{item}</span>
                        <span className="iconfont icon-trash"
                              onClick={() => handleDelete(agent, index)}
                        ></span>
                    </button>
                ))
                }
            </div>
            {agent.status === 'building' ?
                <button className="deny-button">
                    <span className="iconfont icon-deny"></span>
                    <span>Deny</span>
                </button> : null}
        </div>
    )
}
