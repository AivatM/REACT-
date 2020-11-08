import React from 'react';
import './UsersItem.css';
import profilePhoto from '../../../images/noPhoto.png'
import { NavLink } from 'react-router-dom';
import * as axios from 'axios';

const UsersItem = (props) => {
    return (
        <div className="users__item user">
            <div className="user__block_1">
                <NavLink to={'/profile/' + props.id}><img src={props.photoUrl ? props.photoUrl : profilePhoto} alt="profilePhoto" className="user__img" /></NavLink>
                {props.followed
                    ? <button onClick={() => {
                        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${props.id}`,{ 
                            withCredentials: true,
                            headers: {
                                "API-KEY": "a14cfb60-f8b1-4a39-ae2a-8664ebe15c02"
                            }
                        }).then(response => {
                            if (response.data.resultCode == 0) {
                                props.unFollow(props.id)
                            }
                        });

                        
                    }}>отписаться</button>
                    : <button onClick={() => {
                        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${props.id}`, {}, { 
                            withCredentials: true, 
                            headers: {
                                "API-KEY": "a14cfb60-f8b1-4a39-ae2a-8664ebe15c02"
                            }
                        }).then(response => {
                            if (response.data.resultCode == 0) {
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