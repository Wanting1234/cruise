import React from "react";
import Navigation from "./Navigation";
import History from "./History";
import './LeftNavigation.css'

const LeftNavigation = () => {
    return(
        <div className="left-navigation">
            <Navigation />
            <History />
        </div>
    );
}

export default LeftNavigation
