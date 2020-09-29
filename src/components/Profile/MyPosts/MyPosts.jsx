import React from 'react';
import './MyPosts.css';
import PostsItem from './PostsItem/PostsItem';
import {addPostActionCreator, updatePostTextActionCreator} from './../../../redux/state';

const MyPosts = (props) => {
    let postsDataList = props.state.map(messageAndLikes => <PostsItem message={messageAndLikes.message} likeCount={messageAndLikes.likeCount}/>)
    let newPostElement = React.createRef();
    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }
    let onPostChange = () => {
        let text = newPostElement.current.value;
        let action = updatePostTextActionCreator(text);
        props.dispatch(action);
    }
    return (
        <div className="profile__posts posts">
            <h3>Мои записи</h3>
            <div className="posts__new">
                <textarea ref={newPostElement} onChange={onPostChange} className="posts__window" value={props.newPostText} placeholder="Добавьте запись, Напишите о чем думаете?"></textarea>
                <button onClick={addPost} className="posts__btn">Добавить запись</button>
            </div>
            <div className="posts__list">
                {postsDataList}
            </div>
        </div>
    );
}

export default MyPosts;