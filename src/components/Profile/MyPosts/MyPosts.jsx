import React from 'react';
import './MyPosts.css';
import PostsItem from './PostsItem/PostsItem';

const MyPosts = (props) => {
    let postsData = [
        { id: 1, message: 'Всем привет', likeCount: '20' },
        { id: 2, message: 'Сегодня хорошая погода', likeCount: '66' },
        { id: 3, message: 'Люблю добиваться своих целей', likeCount: '33' },
    ];
    return (
        <div className="profile__posts posts">
            <h3>Мои записи</h3>
            <div className="posts__new">
                <textarea className="posts__window" placeholder="Добавьте запись, Напишите о чем думаете?"></textarea>
                <button className="posts__btn">Добавить запись</button>
            </div>
            <div className="posts__list">
                <PostsItem message={postsData[0].message} likeCount={postsData[0].likeCount} />
                <PostsItem message={postsData[1].message} likeCount={postsData[1].likeCount} />
                <PostsItem message={postsData[2].message} likeCount={postsData[2].likeCount} />
            </div>
        </div>
    );
}

export default MyPosts;