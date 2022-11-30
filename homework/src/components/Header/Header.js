import React, {useState} from "react";
import logo from '../../image/logo/logo.svg'
import avatar from '../../image/logo/avatar.jpg'
import './Header.css'

const Header = () => {
    const [isMenuShowed, setIsMenuShowed] = useState(false);
    const menu = [
        { icon: 'icon-id-card', label: 'Profile' },
        { icon: 'icon-sign-in', label: 'Sign Out' }
    ]

    function handleClick() {
        setIsMenuShowed(!isMenuShowed);
    }

    return(
        <header className="header">
            <img src={logo} alt="cruise" className="logo"/>
            <img src={avatar} alt="user-avatar" className="user-avatar"/>
            <input type="checkbox"
                   className="user-menu-list"
                   id="user-menu-list"
                   onClick={handleClick}
            />
            <label htmlFor="user-menu-list"></label>
            {!isMenuShowed ?
                null :
                <section>
                    <ul className="header-user-menu-list">
                        {menu.map((item, index) => (
                            <li className="user-menu-list-item" key={index}>
                                <span className={`iconfont ${item.icon}`}></span>
                                <span className="user-menu-list-item-label">{item.label}</span>
                            </li>
                        ))}
                    </ul>
                </section>

            }
        </header>
    );
}

export default Header;
