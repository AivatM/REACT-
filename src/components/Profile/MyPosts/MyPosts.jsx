import React from 'react';
import './MyPosts.css';
import PostsItem from './PostsItem/PostsItem';

const MyPosts = (props) => {
    let postsDataList = props.state.map(messageAndLikes => <PostsItem message={messageAndLikes.message} likeCount={messageAndLikes.likeCount}/>)
    let newPostElement = React.createRef();
    let addPost = () => {
        props.dispatch({type: 'ADD-POST'});
        props.dispatch({type: 'UPDATE-POST-TEXT', text: ''});
    }
    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch({type: 'UPDATE-POST-TEXT', text: text});
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