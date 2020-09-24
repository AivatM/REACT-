import React from 'react';
import './ImportantFriendsItem.css';
import profilePhoto from './../../../images/profilePhoto.jpg'

const ImportantFriendsItem = (props) => {
    return (
        <div className="important_friends__item">
            <img className="important_friends__img" src={profilePhoto} alt="logo" />
            <a href="#s" className="important_friends__name">{props.name}</a>
        </div>
    );
}
export default ImportantFriendsItem;