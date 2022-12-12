import React from "react";
import './Navbar.css'
import {useDispatch, useSelector} from "react-redux";
import {changeFilter} from "../../features/filterSlice";

export const Navbar = () => {
    const tabList = ['All', 'Physical', 'Virtual'];
    const active = useSelector((state) => state.filter)
    const dispatch = useDispatch()

    const handleClick = item => {
        dispatch(changeFilter(item))
    };

    return (
        <div className="nav-tab">
            {tabList.map((item, index) => (
                <div key={index} className={`nav-tab-item ${active === item ? 'active' : ''}`} onClick={() => handleClick(item)}>
                    <span>{item}</span>
                </div>
            ))}
        </div>
    );
};
