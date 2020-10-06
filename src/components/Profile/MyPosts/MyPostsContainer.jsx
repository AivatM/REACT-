import React from 'react';
import './MyPosts.css';
import { addPostActionCreator, updatePostTextActionCreator } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import StoreContext from '../../../StoreContext';

const MyPostsContainer = (props) => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState();
                    let addPost = () => {
                        store.dispatch(addPostActionCreator());
                    }
                    let onPostChange = (text) => {
                        let action = updatePostTextActionCreator(text);
                        store.dispatch(action);
                    }
                    return (
                        <MyPosts updateNewPostText={onPostChange}
                            addPost={addPost}
                            postsData={state.profilePage.postsData}
                            newPostText={state.profilePage.newPostText} />
                    );
                }
            }
        </StoreContext.Consumer>);
}

export default MyPostsContainer;