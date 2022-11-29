import React from "react";
import LeftNavigation from "../LeftNavigation/LeftNavigation";
import Agent from "../Agent/Agent";
import './Main.css'

const Main = () => {
    return(
        <div className="main">
            <LeftNavigation />
            <Agent />
        </div>
    );
}

export default Main
