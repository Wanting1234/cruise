import React from "react";
import {useDispatch} from "react-redux";
import {selectCurrentAgentId} from "../../../../../../features/selectedAgentIdSlice";
import {setPopupBoxState} from "../../../../../../features/popupSlice";
import {setPosition} from "../../../../../../features/positionSlice";
import {AgentResource} from "./AgentResource";

export const AgentOperation = ({agent}) => {
    const dispatch = useDispatch();

    const getPosition = event => {
        let selectedElm = event.target
        if (selectedElm === document.querySelector(`#plus-${agent.id}`)) {
            selectedElm = selectedElm.parentNode
        }
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
                {agent.resources && <AgentResource agent={agent}/>}
            </div>
            {agent.status === 'building' ?
                <button className="deny-button">
                    <span className="iconfont icon-deny"></span>
                    <span>Deny</span>
                </button> : null}
        </div>
    )
}
