import React from "react";
import Navigation from "./Navigation";
import History from "./History";

const LeftNavigation = () => {
    return(
        <div className="left-navigation">
            <Navigation />
            <History />
        </div>
    );
}

export default LeftNavigation
