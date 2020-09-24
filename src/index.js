import React from 'react'; //Чтобы заработал JSX
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let postsData = [
  { id: 1, message: 'Всем привет', likeCount: '20' },
  { id: 2, message: 'Сегодня хорошая погода', likeCount: '66' },
  { id: 3, message: 'Люблю добиваться своих целей', likeCount: '33' },
  { id: 4, message: 'хз', likeCount: '75' },
  { id: 5, message: 'Мысли вслух', likeCount: '32' },
  { id: 6, message: 'Любите', likeCount: '39' },
];
let dialogsPeopleData = [
  { id: 1, name: 'Лена' },
  { id: 2, name: 'Игорь' },
  { id: 3, name: 'Эмилия' },
];
let dialogsMessagesData = [
  { id: 1, message: 'привет' },
  { id: 2, message: 'Как дела' },
  { id: 3, message: 'все нормально' },
];


ReactDOM.render(
  <React.StrictMode>
    <App postsData={postsData} 
    dialogsPeopleData={dialogsPeopleData} 
    dialogsMessagesData={dialogsMessagesData}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
