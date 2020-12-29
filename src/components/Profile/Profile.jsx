import React from "react";
import "./Profile.css";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <main className="profile">
      <ProfileInfo profile={props.profile} />
      <MyPostsContainer />
    </main>
  );
};
export default Profile;
