import React from "react";
import logo from '../../image/logo/logo.svg'
import avatar from '../../image/logo/avatar.jpg'
import './Header.css'

const Header = () => {
    return(
        <header className="header">
            <img src={logo} alt="cruise" className="logo"/>
            <img src={avatar} alt="user-avatar" className="user-avatar"/>
            <input type="checkbox"
                   className="user-menu-list"
                   id="user-menu-list"/>
            <label htmlFor="user-menu-list"></label>
        </header>
    );
}

export default Header;
