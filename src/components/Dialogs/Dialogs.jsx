import React from 'react';
import { NavLink } from 'react-router-dom';
import './Dialogs.css';

const DialogsPeopleItem = (props) => {
    return (
        <div className="dialogs__people-item people-item">
            <NavLink to={"/dialogs/"+props.id} className="people-item__name">{props.name}</NavLink>
        </div>
    );
}
const DialogsMessagesItem = (props) => {
    return (
        <div className="dialogs-messages__item">{props.message}</div>
    );
}

const Dialogs = (props) => {
    return (
        <main className="dialogs">
            <h3 className="dialogs__header">
                Сообщения
            </h3>
            <div className="flex">
                <div className="dialogs__people">
                    <DialogsPeopleItem name="Лена" id="1"/>
                    <DialogsPeopleItem name="Игорь" id="2"/>
                    <DialogsPeopleItem name="Эмилия" id="3"/>
                </div>
                <div className="dialogs__messages dialogs-messages">
                    <DialogsMessagesItem message="привет"/>
                    <DialogsMessagesItem message="Как дела"/>
                    <DialogsMessagesItem message="все нормально"/>
                    <textarea className="dialogs__messages-window"></textarea>
                    <button className="dialogs__messages-button">Отправить сообщение</button>
                </div>
            </div>
        </main>
    );
}
export default Dialogs;