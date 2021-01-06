import React from "react";
import "./ProfileInfo.css";
import profileBg from "../../../images/profileBg.jpg";
import profilePhoto from "../../../images/noPhoto.png";
import Preloader from "../../common/Preloader/Preloader";
import facebook from "../../../images/profile/socials/facebook.png";
import website from "../../../images/profile/socials/website.png";
import vk from "../../../images/profile/socials/vk.png";
import twitter from "../../../images/profile/socials/twitter.png";
import instagram from "../../../images/profile/socials/instagram.png";
import youtube from "../../../images/profile/socials/youtube.png";
import github from "../../../images/profile/socials/github.png";
import yes from "../../../images/profile/yes.png";
import no from "../../../images/profile/no.png";
import ProfileStatus from "./ProfileStatus/ProfileStatus";
const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }
  return (
    <div className="profileInfo">
      <picture className="profile__bg-wrapper">
        <img src={profileBg} className="profile__bg-img" alt="profileBg" />
      </picture>
      <div className="profile__card card">
        <picture className="card__photo-wrapper">
          {props.profile.photos.large ? (
            <img
              src={props.profile.photos.large}
              className="card__photo-img"
              alt="profilePhoto"
            />
          ) : (
            <img
              src={profilePhoto}
              className="card__photo-img"
              alt="profilePhoto"
            />
          )}
        </picture>
        <div className="card__text">
          <div className="card__name">{props.profile.fullName}</div>
          <ProfileStatus status={"ddd"} />
          <div className="card__about">
            <b>Обо мне:</b> {props.profile.aboutMe}
          </div>
          <div className="card__job_search">
            <b>Ищу работу: </b>{" "}
            {props.profile.lookingForAJob ? (
              <img className="card__job_search_img" src={yes} alt="да" />
            ) : (
              <img className="card__job_search_img" src={no} alt="нет" />
            )}
          </div>
          <div className="card__job_description">
            <b>Описание работы:</b> {props.profile.lookingForAJobDescription}
          </div>
          <div className="card__socials socials">
            {props.profile.contacts.facebook && (
              <a
                href={props.profile.contacts.facebook}
                className="socials__link"
              >
                <img src={facebook} alt="facebook" className="socials__img" />
              </a>
            )}
            {props.profile.contacts.website && (
              <a
                href={props.profile.contacts.website}
                className="socials__link"
              >
                <img src={website} alt="website" className="socials__img" />
              </a>
            )}
            {props.profile.contacts.vk && (
              <a href={props.profile.contacts.vk} className="socials__link">
                <img src={vk} alt="vk" className="socials__img" />
              </a>
            )}
            {props.profile.contacts.twitter && (
              <a
                href={props.profile.contacts.twitter}
                className="socials__link"
              >
                <img src={twitter} alt="twitter" className="socials__img" />
              </a>
            )}
            {props.profile.contacts.instagram && (
              <a
                href={props.profile.contacts.instagram}
                className="socials__link"
              >
                <img src={instagram} alt="instagram" className="socials__img" />
              </a>
            )}
            {props.profile.contacts.youtube && (
              <a
                href={props.profile.contacts.youtube}
                className="socials__link"
              >
                <img src={youtube} alt="youtube" className="socials__img" />
              </a>
            )}
            {props.profile.contacts.github && (
              <a href={props.profile.contacts.github} className="socials__link">
                <img src={github} alt="github" className="socials__img" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
