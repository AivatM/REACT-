import React from 'react';
import './MyPosts.css';
import PostsItem from './PostsItem/PostsItem';

const MyPosts = (props) => {
    return (
        <div className="profile__posts posts">
            <h3>Мои записи</h3>
            <div className="posts__new">
                <textarea className="posts__window" placeholder="Добавьте запись, Напишите о чем думаете?"></textarea>
                <button className="posts__btn">Добавить запись</button>
            </div>
            <div className="posts__list">
               <PostsItem message='Всем привет' likeCount='20'/> 
               <PostsItem message='Сегодня хорошая погода' likeCount='66'/> 
               <PostsItem message='Люблю добиваться своих целей' likeCount='33'/> 
            </div>
        </div>
    );
}

export default MyPosts;