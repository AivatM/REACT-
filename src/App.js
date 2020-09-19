import React from 'react'; //Чтобы заработал JSX
import './App.css';
import logo from './images/logo.png' //Подключил логотип 
import profileBg from './images/profileBg.jpg'
import profilePhoto from './images/profilePhoto.jpg'


const App = (props) => {
  return (
    <div className="app-wrapper">

      <header className="header">
        <div className="container">
          <a href="#" className="header__logo-link">
            <img src={logo} alt="logo" className="header__logo-img"/>
          </a>
        </div>
      </header>

      <div className="container">

        <div className="flex">

          <aside className="sitebar">
            <nav className="menu">
              <ul className="menu__list">
                <li className="menu__item">
                  <a href="#" className="menu__link">Профиль</a>
                </li>
                <li className="menu__item">
                  <a href="#" className="menu__link">Сообщения</a>
                </li>
                <li className="menu__item">
                  <a href="#" className="menu__link">Новости</a>
                </li>
                <li className="menu__item">
                  <a href="#" className="menu__link">Музыка</a>
                </li>
                <li className="menu__item">
                  <a href="#" className="menu__link">Настройки</a>
                </li>
              </ul>
            </nav>
          </aside>

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
        </div>
      </div>
    </div>
  );
}
export default App;
