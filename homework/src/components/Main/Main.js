import React from "react";
import Navigation from "./Navigation/Navigation";
import Content from "./Content/Content";
import './Main.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {OtherPage} from "./Content/OtherPage/OtherPage";

const Main = () => {
    return(
        <BrowserRouter>
        <div className="main">
            <Navigation />
            <Routes>
            <Route path="/" element={<Content />}/>
            <Route path="/agent" element={<Content match={'agent'} />}/>
            <Route path="/dashboard" element={<OtherPage match={'dashboard'}/>} />
            <Route path="/my cruise" element={<OtherPage match={'my cruise'} />}/>
            <Route path="/help" element={<OtherPage match={'help'} />}/>
            </Routes>
        </div>
        </BrowserRouter>
    );
}

export default Main
