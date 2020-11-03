import React from 'react'; //Чтобы заработал JSX
import { Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Sitebar from './components/Sitebar/Sitebar';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import News from './components/News/News';
import Music from './components/Music/Music';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';



const App = (props) => {
  return (
    <div className="app-wrapper">
      <Header />
      <div className="container">
        <div className="flex">
          <Sitebar />
          <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
          <Route path="/dialogs" render={() => <DialogsContainer />} />
          <Route path="/users" render={() => <UsersContainer/>} />
          <Route path="/news" render={() => <News />} />
          <Route path="/music" render={() => <Music />} />
        </div>
      </div>
    </div>
  );
}
export default App;
