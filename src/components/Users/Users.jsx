import React from 'react';
import './Users.css';
import UsersItem from './UsersItem/UsersItem';
import * as axios from 'axios';

const Users = (props) => {
    if(props.users.length === 0) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            debugger;
            props.setUsers(response.data.items);
        }); 
    }
  
    
    


    let usersElements = props.users.map(u => 
    <UsersItem id={u.id} photoUrl={u.photos.small} followed={u.followed}
    name={u.name} status={u.status} 
    country={'u.location.country'} city={'u.location.city'}
    follow={props.follow}
    unFollow={props.unFollow} />);
   
    return (
        <section className="users">
            <h1 className="users__header">
                Пользователи
            </h1>
            <div className="users__list">
                {usersElements}
            </div>
        </section>
    
    );
}

export default Users;