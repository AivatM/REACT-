import React from 'react';
import './Profile.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
  return (
    <main className="profile">
      <ProfileInfo/>
      <MyPosts/>
    </main>
  );
}
export default Profile;