import React from 'react';
import { useDispatch } from 'react-redux';
import logo from '../../images/logo/logo.svg';
import avatar from '../../images/logo/avatar.jpg';
import './Header.css';
import { setIsNavigationShow } from '../../features/navigationSlice';

function Header() {
  const menu = [
    { icon: 'icon-id-card', label: 'Profile' },
    { icon: 'icon-sign-in', label: 'Sign Out' },
  ];
  const dispatch = useDispatch();

  return (
    <header className="header">
      <span className="icon-navicon" onClick={() => { dispatch(setIsNavigationShow(true)); }} />
      <img src={logo} alt="cruise" className="logo" />
      <div className="dropdown">
        <img src={avatar} alt="avatars" className="avatars" />
        <span className="icon-angle-down" />
        <div className="dropdown-content">
          <ul>
            {menu.map((item) => (
              <li key={item.label}>
                <span className={`iconfont ${item.icon}`} />
                <span>{item.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
