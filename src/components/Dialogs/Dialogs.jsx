import React from 'react';
import './Dialogs.css';
import DialogsMessagesItem from './DialogsMessagesItem/DialogsMessagesItem';
import DialogsPeopleItem from './DialogsPeopleItem/DialogsPeopleItem';

const Dialogs = (props) => {
    let dialogsPeopleDataList = props.dialogsPeopleData.map(people => <DialogsPeopleItem name={people.name} id={people.id} />);
    let dialogsMessagesDataList = props.dialogsMessagesData.map(message => <DialogsMessagesItem message={message.message} />);
    return (
        <main className="dialogs">
            <h3 className="dialogs__header">
                Сообщения
            </h3>
            <div className="flex">
                <div className="dialogs__people">
                    {dialogsPeopleDataList}
                </div>
                <div className="dialogs__messages dialogs-messages">
                    {dialogsMessagesDataList}
                    <textarea className="dialogs__messages-window"></textarea>
                    <button className="dialogs__messages-button">Отправить сообщение</button>
                </div>
            </div>
        </main>
    );
}
export default Dialogs;