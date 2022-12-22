import React from "react";
import './AgentView.css'
import {AgentList} from "./AgentList/AgentList";
import {OverView} from "./OverView/OverView";

const AgentView = () => {
    return (
        <div className="content" role="content">
            <OverView/>
            <AgentList/>
        </div>
    )
}

export default AgentView
