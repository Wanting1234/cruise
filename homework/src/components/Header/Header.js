import React from "react";
import logo from '../../images/logo/logo.svg'
import avatar from '../../images/logo/avatar.jpg'
import './Header.css'
import {useDispatch} from "react-redux";
import {setNavigationState} from "../../features/navigationSlice";

const Header = () => {
    const menu = [
        {icon: 'icon-id-card', label: 'Profile'},
        {icon: 'icon-sign-in', label: 'Sign Out'}
    ]
    const dispatch = useDispatch();

    function handleShowNav() {
        dispatch(setNavigationState(true))
    }

    return (
        <header className="header">
            <span className="icon-navicon" onClick={handleShowNav}></span>
            <img src={logo} alt="cruise" className="logo"/>
            <div className="dropdown">
                <img src={avatar} alt="user-avatar" className="user-avatar"/>
                <span className="icon-angle-down"></span>
                <div className="dropdown-content">
                    <ul>
                        {menu.map((item) => <li key={item.label}>
                                <span className={`iconfont ${item.icon}`}></span>
                                <span>{item.label}</span>
                        </li>)}
                    </ul>
                </div>
            </div>
        </header>
    );
}

export default Header;
