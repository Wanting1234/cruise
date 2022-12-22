import React from "react";
import './Navbar.css'

export const Navbar = ({filter, setFilter}) => {
    const tabList = ['All', 'Physical', 'Virtual'];
    const active = filter;

    // todo: mysterious name(change function name)
    const handleClick = item => {
        setFilter(item)
    };

    return (
        <div className="nav-tab">
            {tabList.map((item, index) => (
                <div key={index} className={`nav-tab-item ${active === item ? 'active' : ''}`} data-testid={`${item}`}
                     onClick={() => handleClick(item)}>
                    <span>{item}</span>
                </div>
            ))}
        </div>
    );
};
