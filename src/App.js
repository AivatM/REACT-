import React from "react"; //Чтобы заработал JSX
import { Route } from "react-router-dom";
import "./App.css";
import HeaderContainer from "./components/Header/HeaderContainer";
import Sitebar from "./components/Sitebar/Sitebar";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import LoginPage from "./components/Login/Login";

const App = (props) => {
  return (
    <div className="app-wrapper">
      <HeaderContainer />
      <div className="container">
        <div className="flex">
          <Sitebar />
          <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
          <Route path="/dialogs" render={() => <DialogsContainer />} />
          <Route path="/users" render={() => <UsersContainer />} />
          <Route path="/news" render={() => <News />} />
          <Route path="/music" render={() => <Music />} />
          <Route path="/login" render={() => <LoginPage />} />
        </div>
      </div>
    </div>
  );
};
export default App;
