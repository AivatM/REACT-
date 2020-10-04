const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';

const profileReducer = (state, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 7,
                message: state.newPostText,
                likeCount: '20',
            }
            state.postsData.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_POST_TEXT:
            state.newPostText = action.text;
            return state;
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