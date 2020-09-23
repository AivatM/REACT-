import React from 'react';
import './MyPosts.css';
import PostsItem from './PostsItem/PostsItem';

const MyPosts = (props) => {
    let postsData = [
        { id: 1, message: 'Всем привет', likeCount: '20' },
        { id: 2, message: 'Сегодня хорошая погода', likeCount: '66' },
        { id: 3, message: 'Люблю добиваться своих целей', likeCount: '33' },
        { id: 4, message: 'хз', likeCount: '75' },
        { id: 5, message: 'Мысли вслух', likeCount: '32' },
        { id: 6, message: 'Любите', likeCount: '39' },
    ];
    let postsDataList = postsData.map(messageAndLikes => <PostsItem message={messageAndLikes.message} likeCount={messageAndLikes.likeCount}/>)
    return (
        <div className="profile__posts posts">
            <h3>Мои записи</h3>
            <div className="posts__new">
                <textarea className="posts__window" placeholder="Добавьте запись, Напишите о чем думаете?"></textarea>
                <button className="posts__btn">Добавить запись</button>
            </div>
            <div className="posts__list">
                {postsDataList}
            </div>
        </div>
    );
}

export default MyPosts;