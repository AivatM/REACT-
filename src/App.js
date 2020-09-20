import React from 'react'; //Чтобы заработал JSX
import './App.css'; 
import Header from './components/Header/Header';
import Dialogs from './components/Messages/Dialogs';
import Profile from './components/Profile/Profile';
import Sitebar from './components/Sitebar/Sitebar';


const App = (props) => {
  return (
    <div className="app-wrapper">
      <Header/>
      <div className="container">
        <div className="flex">
          <Sitebar/>
          {/* <Profile/> */}
          <Dialogs/>
        </div>
      </div>
    </div>
  );
}
export default App;
