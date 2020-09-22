import React from 'react';
import { NavLink } from 'react-router-dom';
import './Dialogs.css';

const DialogsPeopleItem = (props) => {
    return (
        <div className="dialogs__people-item people-item">
            <NavLink to={"/dialogs/" + props.id} className="people-item__name">{props.name}</NavLink>
        </div>
    );
}
const DialogsMessagesItem = (props) => {
    return (
        <div className="dialogs-messages__item">{props.message}</div>
    );
}

const Dialogs = (props) => {
    let dialogsPeopleData = [
        { id: 1, name: 'Лена' },
        { id: 2, name: 'Игорь' },
        { id: 3, name: 'Эмилия' },
    ];
    let dialogsMessagesData = [
        { id: 1, message: 'привет' },
        { id: 2, message: 'Как дела' },
        { id: 3, message: 'все нормально' },
    ];

    return (
        <main className="dialogs">
            <h3 className="dialogs__header">
                Сообщения
            </h3>
            <div className="flex">
                <div className="dialogs__people">
                    <DialogsPeopleItem name={dialogsPeopleData[0].name} id={dialogsPeopleData[0].id} />
                    <DialogsPeopleItem name={dialogsPeopleData[1].name} id={dialogsPeopleData[1].id} />
                    <DialogsPeopleItem name={dialogsPeopleData[2].name} id={dialogsPeopleData[2].id} />
                </div>
                <div className="dialogs__messages dialogs-messages">
                    <DialogsMessagesItem message={dialogsMessagesData[0].message} />
                    <DialogsMessagesItem message={dialogsMessagesData[1].message} />
                    <DialogsMessagesItem message={dialogsMessagesData[2].message} />
                    <textarea className="dialogs__messages-window"></textarea>
                    <button className="dialogs__messages-button">Отправить сообщение</button>
                </div>
            </div>
        </main>
    );
}
export default Dialogs;