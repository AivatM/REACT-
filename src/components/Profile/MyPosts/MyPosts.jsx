import React from 'react';
import './MyPosts.css';
import PostsItem from './PostsItem/PostsItem';

const MyPosts = (props) => {
    let postsDataList = props.postsData.map(p => <PostsItem message={p.message} likeCount={p.likeCount}/>);
    let addPost = () => {
        props.addPost();
    }
    let onPostChange = (e) => {
        let text = e.target.value;
        props.updateNewPostText(text);
    }
    return (
        <div className="profile__posts posts">
            <h3>Мои записи</h3>
            <div className="posts__new">
                <textarea onChange={onPostChange} className="posts__window" value={props.newPostText} placeholder="Добавьте запись, Напишите о чем думаете?"></textarea>
                <button onClick={addPost} className="posts__btn">Добавить запись</button>
            </div>
            <div className="posts__list">
                {postsDataList}
            </div>
        </div>
    );
}


export default MyPosts;