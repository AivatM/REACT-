import React from 'react'; //Чтобы заработал JSX
import './App.css';
import Header from './Header'; //Подключили к файлу App.js компонетну Header
import Technology from './Technology';//Подключили к файлу App.js компонетну Technology

const App = (props) => {
  return (
    <div className="App">
      <Header/>
      <Technology/>
    </div>
  );
}
export default App;
