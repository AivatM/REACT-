import React from 'react';
import './Profile.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
  return (
    <main className="profile">
      <ProfileInfo/>
      <MyPosts state={props.state.postsData} addPost={props.addPost}/>
    </main>
  );
}
export default Profile;