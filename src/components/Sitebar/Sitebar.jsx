import React from 'react';
import './Sitebar.css';

const Sitebar = (props) => {
    return (
        <aside className="sitebar">
            <nav className="menu">
                <ul className="menu__list">
                    <li className="menu__item">
                        <a href="/profile" className="menu__link">Профиль</a>
                    </li>
                    <li className="menu__item">
                        <a href="/dialogs" className="menu__link">Сообщения</a>
                    </li>
                    <li className="menu__item">
                        <a href="/news" className="menu__link">Новости</a>
                    </li>
                    <li className="menu__item">
                        <a href="/music" className="menu__link">Музыка</a>
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