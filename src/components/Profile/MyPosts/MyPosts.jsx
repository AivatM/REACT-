import React from 'react';
import './MyPosts.css';
import PostsItem from './PostsItem/PostsItem';

const MyPosts = (props) => {
    let postsDataList = props.state.map(messageAndLikes => <PostsItem message={messageAndLikes.message} likeCount={messageAndLikes.likeCount}/>)
    let newPostElement = React.createRef();
    let addPost = () => {
        let text = newPostElement.current.value;
        alert(text);
    }
    return (
        <div className="profile__posts posts">
            <h3>Мои записи</h3>
            <div className="posts__new">
                <textarea ref={newPostElement} className="posts__window" placeholder="Добавьте запись, Напишите о чем думаете?"></textarea>
                <button onClick={addPost} className="posts__btn">Добавить запись</button>
            </div>
            <div className="posts__list">
                {postsDataList}
            </div>
        </div>
    );
}

export default MyPosts;