import React from 'react';
import './MyPosts.css';
import {addPostActionCreator, updatePostTextActionCreator} from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';

const MyPostsContainer = (props) => {
    let state = props.store.getState();
    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    }
    let onPostChange = (text) => {
        let action = updatePostTextActionCreator(text);
        props.store.dispatch(action);
    }
    return (<MyPosts updateNewPostText={onPostChange} addPost={addPost} postsData={state.profilePage.postsData} newPostText={state.profilePage.newPostText}/>);
}

export default MyPostsContainer;