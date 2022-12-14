import {Navbar} from "./Navbar";
import {InputSearch} from "./InputSearch";
import React from "react";

export const Menu = () => <div className="agent-navbar">
    <Navbar/>
    <InputSearch/>
    <div className="iconfont icon-type icon-th-card"></div>
    <div className="iconfont icon-type icon-th-list active"></div>
</div>;
