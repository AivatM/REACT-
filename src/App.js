import React from 'react';
import './App.css';

const App = (props) => {
  return (
    <div className="App">
      <Header/>
      <Technology/>
    </div>
  );
}
const Header = (props) => {
  return (
    <h1>ЗДЕСЬ БУДЕТ ШАПКА САЙТА</h1>
  );
}
const Technology = (props) => {
  return (
    <ul>
        <li>html</li>
        <li>css</li>
        <li>js</li>
        <li>react</li>
    </ul>
  );
}

export default App;
