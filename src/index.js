import './index.css';
import store from './redux/state';
import * as serviceWorker from './serviceWorker';
import state, { subcribe } from './redux/state';
import React from 'react'; //Чтобы заработал JSX
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, updatePostText} from './redux/state';

let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={state} dispatch={store.dispatch.bind(store)}/>
    </React.StrictMode>,
    document.getElementById('root')
  );
}

rerenderEntireTree(store.getState());
store.subcribe(rerenderEntireTree);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
