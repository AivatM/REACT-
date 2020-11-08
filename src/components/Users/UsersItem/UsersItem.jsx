import React from 'react';
import './UsersItem.css';
import profilePhoto from '../../../images/noPhoto.png'
import { NavLink } from 'react-router-dom';
import { followAPI, unfollowAPI } from '../../../api/api';

const UsersItem = (props) => {
    return (
        <div className="users__item user">
            <div className="user__block_1">
                <NavLink to={'/profile/' + props.id}><img src={props.photoUrl ? props.photoUrl : profilePhoto} alt="profilePhoto" className="user__img" /></NavLink>
                {props.followed
                    ? <button onClick={() => {
                        unfollowAPI.unfollow(props.id).then(data => {
                            if (data.resultCode == 0) {
                                props.unFollow(props.id)
                            }
                        });
                    }}>отписаться</button>
                    : <button onClick={() => {
                        followAPI.follow(props.id).then(data => {
                            if (data.resultCode == 0) {
                                props.follow(props.id)
                            }
                        });
                    }}>подписаться</button>}
            </div>
            <div className="user__block_2">
                <div className="user__column">
                    <div className="user__name">
                        {props.name}
                    </div>
                    <div className="user__status">
                        {props.status}
                    </div>
                </div>
                <div className="user__column">
                    <div className="user__country">
                        {props.country}
                    </div>
                    <div className="user__city">
                        {props.city}
                    </div>
                </div>

            </div>
        </div>
    );
}

export default UsersItem;