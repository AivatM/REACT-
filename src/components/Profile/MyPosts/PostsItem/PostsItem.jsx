import React from 'react';
import './PostsItem.css';
import profilePhoto from '../../../../images/profilePhoto.jpg';
import like from '../../../../images/like.png';


const PostsItem = (props) => {
    return (
        <div className="posts__item">
            <div className="flex">
                <img src={profilePhoto} className="posts__img" alt="profilePhoto" />
                <div className="posts__text">
                    {props.message}
                </div>
            </div>
            <div className="posts__like">
                <a href="#s" className="posts__like-link">
                    <img src={like} alt="" className="posts__like-img" />
                </a>
                <span className="posts__like-number">{props.likeCount}</span>
            </div>
        </div>
    );
}

export default PostsItem;