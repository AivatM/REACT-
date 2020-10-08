import React from 'react';
import './MyPosts.css';
import { addPostActionCreator, updatePostTextActionCreator } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return{
        postsData:state.profilePage.postsData,
        newPostText: state.profilePage.newPostText,
    }
}
let mapDispatchToProps = (dispatch) => {
    return{
        addPost: () => {dispatch(addPostActionCreator());},
        updateNewPostText: (text) => {
            let action = updatePostTextActionCreator(text);
            dispatch(action);} 
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;