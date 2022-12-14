import React from "react";
import Navigation from "../Navigation/Navigation";
import Content from "../Content/Content";
import './Main.css'

const Main = () => {
    return(
        <div className="main">
            <Navigation />
            <Content />
        </div>
    );
}

export default Main
