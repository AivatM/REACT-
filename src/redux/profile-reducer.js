const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';

let initialState = {
    postsData:[
        { id: 1, message: 'Всем привет', likeCount: '20' },
        { id: 2, message: 'Сегодня хорошая погода', likeCount: '66' },
        { id: 3, message: 'Люблю добиваться своих целей', likeCount: '33' },
        { id: 4, message: 'хз', likeCount: '75' },
        { id: 5, message: 'Мысли вслух', likeCount: '32' },
        { id: 6, message: 'Любите', likeCount: '39' },
    ],
    newPostText:"",
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 7,
                message: state.newPostText,
                likeCount: '20',
            }
            return {
                ...state,
                newPostText: '',
                postsData:[...state.postsData,newPost],
            }
        }
        case UPDATE_POST_TEXT: {
            return {
                ...state,
                newPostText: action.text,
            }
        }
        default:
            return state;
    }
}
export const addPostActionCreator = () => {
    return {type: ADD_POST};
 }
export const updatePostTextActionCreator = (text) => {
    return {type: UPDATE_POST_TEXT, text: text}
 }

export default profileReducer;