let state = {
    profilePage:{
        postsData:[
            { id: 1, message: 'Всем привет', likeCount: '20' },
            { id: 2, message: 'Сегодня хорошая погода', likeCount: '66' },
            { id: 3, message: 'Люблю добиваться своих целей', likeCount: '33' },
            { id: 4, message: 'хз', likeCount: '75' },
            { id: 5, message: 'Мысли вслух', likeCount: '32' },
            { id: 6, message: 'Любите', likeCount: '39' },
        ],
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
}

export let addPost = (postText) => {
    debugger;
    let newPost = {
        id: 7, 
        message: postText, 
        likeCount: '20',
    }
    state.profilePage.postsData.push(newPost);
}

export default state;
