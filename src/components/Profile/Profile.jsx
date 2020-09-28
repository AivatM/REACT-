import React from 'react';
import './Profile.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
  return (
    <main className="profile">
      <ProfileInfo/>
      <MyPosts state={props.state.postsData} dispatch={props.dispatch} updatePostText={props.updatePostText}/>
    </main>
  );
}
export default Profile;