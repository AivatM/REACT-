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
    getState() {
        return this._state;
    },
    _rerenderEntireTree() {
        console.log('dd');
    },
    addPost() {
        let newPost = {
            id: 7, 
            message: this._state.profilePage.newPostText, 
            likeCount: '20',
        }
        this._state.profilePage.postsData.push(newPost);
        this._rerenderEntireTree(this._state);
    },
    updatePostText(text) {
        this._state.profilePage.newPostText = text;
        this._rerenderEntireTree(this._state);
    },
    subcribe(observer) {
        this._rerenderEntireTree = observer;
    },
}

export default store;
window.store = store;
