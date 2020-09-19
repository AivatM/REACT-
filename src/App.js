import React from 'react'; //Чтобы заработал JSX
import './App.css'; 
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Sitebar from './components/Sitebar/Sitebar';


const App = (props) => {
  return (
    <div className="app-wrapper">
      <Header/>
      <div className="container">
        <div className="flex">
          <Sitebar/>
          <Profile/>
        </div>
      </div>
    </div>
  );
}
export default App;
