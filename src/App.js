import React from 'react'; //Чтобы заработал JSX
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Sitebar from './components/Sitebar/Sitebar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';



const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <div className="container">
          <div className="flex">
            <Sitebar state={props.state.sitebar}/>
            <Route path="/profile" render={() => <Profile state={props.state.profilePage} addPost={props.addPost}/>}/>
            <Route path="/dialogs" render={() => <Dialogs state={props.state.dialogsPage}/>} />
            <Route path="/news" render={() => <News/>} />
            <Route path="/music" render={() => <Music/>} />
          </div>
        </div>
        </div>
    </BrowserRouter>
  );
}
export default App;
