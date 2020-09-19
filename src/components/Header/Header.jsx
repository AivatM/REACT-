import React from 'react';
import './Header.css';
import logo from '../../images/logo.png'; //Подключил логотип

const Header = (props) => {
    return (
        <header className="header">
            <div className="container">
                <a href="#" className="header__logo-link">
                    <img src={logo} alt="logo" className="header__logo-img" />
                </a>
            </div>
        </header>
    );
}
export default Header;
