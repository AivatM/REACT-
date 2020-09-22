import React from 'react';
import './ProfileInfo.css';
import profileBg from '../../../images/profileBg.jpg';
import profilePhoto from '../../../images/profilePhoto.jpg';

const ProfileInfo = (props) => {
    return (
        <div className="profileInfo">
            <picture className="profile__bg-wrapper">
                <img src={profileBg} className="profile__bg-img" alt="profileBg" />
            </picture>
            <div className="profile__card card">
                <picture className="card__photo-wrapper">
                    <img src={profilePhoto} className="card__photo-img" alt="profilePhoto" />
                </picture>
                <div className="card__text">
                    <div className="card__name">
                        Эмилия К.
                </div>
                    <div className="card__city">
                        Актобе
                </div>
                    <div className="card__education">
                        Казансий Федеральный Университет
                </div>
                    <a href="s#" className="card__web"> Мой сайт</a>
                </div>
            </div>
        </div>
    );
}

export default ProfileInfo;