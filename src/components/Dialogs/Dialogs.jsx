import React from 'react';
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
                        <a href="#s" className="people-item__name">Света</a>
                    </div>
                    <div className="dialogs__people-item people-item">
                        <a href="#s" className="people-item__name">Лена</a>
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