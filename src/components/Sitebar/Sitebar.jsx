import React from 'react';
import './Sitebar.css';
import { NavLink } from 'react-router-dom';

const Sitebar = (props) => {
    return (
        <aside className="sitebar">
            <nav className="menu">
                <ul className="menu__list">
                    <li className="menu__item">
                        <NavLink to="/profile" className="menu__link">Профиль</NavLink>
                    </li>
                    <li className="menu__item">
                        <NavLink to="/dialogs" className="menu__link">Сообщения</NavLink>
                    </li>
                    <li className="menu__item">
                        <NavLink to="/news" className="menu__link">Новости</NavLink>
                    </li>
                    <li className="menu__item">
                        <NavLink to="/music" className="menu__link">Музыка</NavLink>
                    </li>
                    
                    <li className="menu__item">
                        <a href="#" className="menu__link">Настройки</a>
                    </li>
                </ul>
            </nav>
        </aside>
    );
}

export default Sitebar;