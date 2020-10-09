const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';

let initialState = {
    dialogsPeopleData:[
        { id: 1, name: 'Лена' },
        { id: 2, name: 'Игорь' },
        { id: 3, name: 'Эмилия' },
    ],
    dialogsMessagesData:[
        { id: 1, message: 'привет' },
        { id: 2, message: 'Как дела' },
        { id: 3, message: 'все нормально' },
    ],
    newMessage:''
};
const dialogsReducer = (state=initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE: {
            let text = state.newMessage;
            let stateCopy = { ...state };
            stateCopy.newMessage = '';
            stateCopy.dialogsMessagesData = [ ...state.dialogsMessagesData];
            stateCopy.dialogsMessagesData.push({
                id: 4,
                message: text
            })
            return stateCopy;
        }
        case UPDATE_MESSAGE_TEXT: {
            let stateCopy = { ...state };
            stateCopy.newMessage = action.text;
            return stateCopy;
        }
        default: 
        return state;
    }
}

export const sendMessageCreator = () => {
    return {type: SEND_MESSAGE};
 }
export const updateMessageCreator = (text) => {
    return {type: UPDATE_MESSAGE_TEXT, text: text}
 }
 
export default dialogsReducer;