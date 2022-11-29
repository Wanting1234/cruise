import React from "react";

const Navigation = () => {
    const menu = [
        { id: '1', icon: 'icon-dashboard', name: 'DASHBOARD' },
        { id: '2', icon: 'icon-sitemap', name: 'AGENT' },
        { id: '3', icon: 'icon-boat', name: 'MY CRUISE' },
        { id: '4', icon: 'icon-life-bouy', name: 'HELP' }
    ];

    return (
        <section className="navigation-message">
            <ul>
                {menu.map((item) => <li className="nav" key={item.id}>
                    <span className={`iconfont ${item.icon}`}></span>
                    <span>{item.name}</span>
                </li>)}
            </ul>
        </section>
    );
}

export default Navigation
