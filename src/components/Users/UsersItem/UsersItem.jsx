import React from 'react';
import './UsersItem.css';

const UsersItem = (props) => {
    debugger;
    return (
        <div className="users__item user">
            <div className="user__block_1">
                <img src={props.photoUrl} alt="profilePhoto" className="user__img" />
                {props.followed ? <button onClick={() => {props.unFollow(props.id)}}>отписаться</button> : <button onClick={() => {props.follow(props.id)}}>подписаться</button>}
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