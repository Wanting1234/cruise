import React from "react";
import './Content.css'
import {AgentList} from "./AgentPage/AgentList/AgentList";
import {OverView} from "./AgentPage/OverView/OverView";

const Content = () => {
    return (
        <div className="content">
            <OverView/>
            <AgentList/>
        </div>
    )
}

export default Content
