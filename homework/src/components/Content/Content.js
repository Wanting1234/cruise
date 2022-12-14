import React from "react";
import './Content.css'
import {AgentList} from "./AgentList/AgentList";
import {OverView} from "./OverView/OverView";
import {Menu} from "./Menu/Menu";

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
