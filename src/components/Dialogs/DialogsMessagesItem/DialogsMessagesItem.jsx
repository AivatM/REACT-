import React from 'react';
import './../Dialogs.css';

const DialogsMessagesItem = (props) => {
    return (
        <div className="dialogs-messages__item">{props.message}</div>
    );
}

export default DialogsMessagesItem;