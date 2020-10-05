import React from 'react';
import './Dialogs.css';
import {sendMessageCreator, updateMessageCreator} from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';

const DialogsContainer = (props) => {
    debugger;
    let state = props.store.getState().dialogsPage;
    let onMessageChange = (text) => {
        props.store.dispatch(updateMessageCreator(text))
    }
    let sendMessage = () => {
        props.store.dispatch(sendMessageCreator());
    }
    return (<Dialogs updateMessage={onMessageChange} sendMessage={sendMessage} dialogsPage={state}/>);
}
export default DialogsContainer;