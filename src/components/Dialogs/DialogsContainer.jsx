import React from 'react';
import './Dialogs.css';
import { sendMessageCreator, updateMessageCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import StoreContext from '../../StoreContext';

const DialogsContainer = (props) => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState().dialogsPage;
                    let onMessageChange = (text) => {
                        store.dispatch(updateMessageCreator(text))
                    };
                    let sendMessage = () => {
                        store.dispatch(sendMessageCreator());
                    };
                    return (
                        <Dialogs
                            updateMessage={onMessageChange}
                            sendMessage={sendMessage}
                            dialogsPage={state} />
                    );
                }
            }
        </StoreContext.Consumer>
    );
}
export default DialogsContainer;