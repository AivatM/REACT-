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
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias eum reprehenderit dignissimos, incidunt recusandae magni saepe veniam commodi natus voluptate consequuntur adipisci porro praesentium aliquid veritatis consequatur consectetur nobis et corrupti tempore temporibus error! Animi nemo numquam velit, quos minus similique, facere totam, praesentium ipsam esse eum natus nihil. S.
                </div>
            </div>
            <div className="posts__like">
                <a href="#s" className="posts__like-link">
                    <img src={like} alt="" className="posts__like-img" />
                </a>
                <span className="posts__like-number">124</span>
            </div>
        </div>
    );
}

export default PostsItem;