import profileReducer from './profile-reducer'; 
import dialogsReducer from './dialogs-reducer'; 
import sitebarReducer from './sitebar-reducer'; 

let store = {
    _state:{
        profilePage:{
            postsData:[
                { id: 1, message: 'Всем привет', likeCount: '20' },
                { id: 2, message: 'Сегодня хорошая погода', likeCount: '66' },
                { id: 3, message: 'Люблю добиваться своих целей', likeCount: '33' },
                { id: 4, message: 'хз', likeCount: '75' },
                { id: 5, message: 'Мысли вслух', likeCount: '32' },
                { id: 6, message: 'Любите', likeCount: '39' },
            ],
            newPostText:""
        },
        dialogsPage:{
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
        },
        sitebar: {
            importantFriendsData:[
                { id: 1, name: 'Костя' },
                { id: 2, name: 'Мира' },
                { id: 3, name: 'Лика' },
                { id: 3, name: 'Лика' },
            ]
        }
    },
    _rerenderEntireTree() {
        console.log('dd');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._rerenderEntireTree = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sitebar = sitebarReducer(this._state.sitebar, action);
        this._rerenderEntireTree(this._state);
    }
}



export default store;
