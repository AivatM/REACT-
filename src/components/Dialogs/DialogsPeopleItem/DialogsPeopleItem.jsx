import React from 'react';
import { NavLink } from 'react-router-dom';
import './../Dialogs.css';
import profilePhoto from './../../../images/profilePhoto.jpg'

const DialogsPeopleItem = (props) => {
    return (
        <div className="dialogs__people-item people-item">
            <img className="people-item__img" src={profilePhoto} alt="logo"/>
            <NavLink to={"/dialogs/" + props.id} className="people-item__name">{props.name}</NavLink>
        </div>
    );
}

export default DialogsPeopleItem;