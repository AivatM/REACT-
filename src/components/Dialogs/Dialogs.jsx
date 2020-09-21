import React from 'react';
import { NavLink } from 'react-router-dom';
import './Dialogs.css';

const Dialogs = (props) => {
    return (
        <main className="dialogs">
            <h3 className="dialogs__header">
                Сообщения
            </h3>
            <div className="flex">
                <div className="dialogs__people">
                    <div className="dialogs__people-item people-item">
                        <NavLink to="/dialogs/1" className="people-item__name">Света</NavLink>
                    </div>
                    <div className="dialogs__people-item people-item">
                        <NavLink to="/dialogs/2" className="people-item__name">Лена</NavLink>
                    </div>
                    <div className="dialogs__people-item people-item">
                        <NavLink to="/dialogs/3" className="people-item__name">Надя</NavLink>
                    </div>
                    <div className="dialogs__people-item people-item">
                        <NavLink to="/dialogs/4" className="people-item__name">Игорь</NavLink>
                    </div>
                </div>
                <div className="dialogs__messages dialogs-messages">
                    <div className="dialogs-messages__item">Здаров</div>
                    <textarea className="dialogs__messages-window"></textarea>
                    <button className="dialogs__messages-button">Отправить сообщение</button>
                </div>
            </div>
        </main>
    );
}
export default Dialogs;