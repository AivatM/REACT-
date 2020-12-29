import React from "react";
import "./Header.css";
import logo from "../../images/logo.png"; //Подключил логотип
import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__content">
          <a href="#" className="header__logo-link">
            <img src={logo} alt="logo" className="header__logo-img" />
          </a>
          <div className="header__login login">
            {props.isAuth ? (
              <div className="login__name">{props.login}</div>
            ) : (
              <NavLink className="login__link" to="/login">
                Login
              </NavLink>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
