import React, {useState} from "react";
import './Navbar.css'

export const Navbar = () => {
    const tabList = ['All', 'Physical', 'Virtual'];
    const [active, setActive] = useState('All');

    const handleClick = item => {
        setActive(item)
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
