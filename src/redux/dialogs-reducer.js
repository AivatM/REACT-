const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';

const dialogsReducer = (state, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let text = state.newMessage;
            state.newMessage = '';
            state.dialogsMessagesData.push({
                id: 4,
                message: text
            })
            return state;
        case UPDATE_MESSAGE_TEXT:
            state.newMessage = action.text;
            return state;
        default: 
        return state
    }
}

export const sendMessageCreator = () => {
    return {type: SEND_MESSAGE};
 }
export const updateMessageCreator = (text) => {
    return {type: UPDATE_MESSAGE_TEXT, text: text}
 }
 
export default dialogsReducer;