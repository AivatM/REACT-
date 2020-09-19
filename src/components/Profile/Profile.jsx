import React from 'react';
import './Profile.css'
import profileBg from '../../images/profileBg.jpg';
import profilePhoto from '../../images/profilePhoto.jpg';

const Profile = (props) => {
    return(
        <main className="profile">
            <picture className="profile__bg-wrapper">
              <img src={profileBg} className="profile__bg-img" alt="profileBg"/>
            </picture>
            <div className="profile__card card">
              <picture className="card__photo-wrapper">
                <img src={profilePhoto} className="card__photo-img" alt="profilePhoto"/>
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
                <a href="#" className="card__web"> Мой сайт</a>
              </div>
            </div>
            <div className="profile__posts posts">
              <h3>Мои записи</h3>
              <div className="posts__new">
                <textarea className="posts__window" placeholder="Добавьте запись, Напишите о чем думаете?"></textarea>
                <button className="posts__btn">Добавить запись</button>
              </div>
            </div>
        </main>
    );
}
export default Profile;