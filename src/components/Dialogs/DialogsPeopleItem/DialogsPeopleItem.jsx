import React from 'react';
import { NavLink } from 'react-router-dom';
import './../Dialogs.css';

const DialogsPeopleItem = (props) => {
    return (
        <div className="dialogs__people-item people-item">
            <NavLink to={"/dialogs/" + props.id} className="people-item__name">{props.name}</NavLink>
        </div>
    );
}

export default DialogsPeopleItem;