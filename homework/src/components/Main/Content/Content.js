import React from "react";
import './Content.css'
import {AgentList} from "./AgentPage/AgentList/AgentList";
import {OverView} from "./AgentPage/OverView/OverView";
import {Menu} from "./AgentPage/Menu/Menu";

const Content = () => {
    return (
        <div className="content">
            <OverView/>
            <Menu/>
            <AgentList/>
        </div>
    )
}

export default Content
