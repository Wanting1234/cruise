import {Navbar} from "./Navbar";
import {InputSearch} from "./InputSearch";
import React from "react";

export const Menu = ({filter, setFilter}) => <div className="agent-navbar">
    <Navbar filter={filter} setFilter={setFilter}/>
    <InputSearch/>
    <div className="iconfont icon-type icon-th-card" data-testid="icon-th-card"></div>
    <div className="iconfont icon-type icon-th-list active" data-testid="icon-th-list"></div>
</div>;
