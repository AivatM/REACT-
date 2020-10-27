import React from 'react';
import './Users.css';
import UsersItem from './UsersItem/UsersItem';

const Users = (props) => {
    if(props.users.length === 0) {
        props.setUsers(
            [
            {id: 1, photoUrl: 'https://tiktok-wiki.ru/wp-content/uploads/2020/05/avatarki-dlya-tik-toka1.jpg', followed: false, fullName: 'Oleg', status: 'I am boss', location: {city: 'Minsk', country: 'Belarus'}},
            {id: 2, photoUrl: 'https://tiktok-wiki.ru/wp-content/uploads/2020/05/avatarki-dlya-tik-toka1.jpg', followed: true, fullName: 'Aivat', status: 'I am boss too', location: {city: 'Aktobe', country: 'Kazakhstan'}},
            {id: 3, photoUrl: 'https://tiktok-wiki.ru/wp-content/uploads/2020/05/avatarki-dlya-tik-toka1.jpg', followed: false, fullName: 'Olya', status: 'I am girl', location: {city: 'Moscow', country: 'Russia'}},
            ]
        )
    }
    


    let usersElements = props.users.map(u => 
    <UsersItem id={u.id} photoUrl={u.photoUrl} followed={u.followed}
    name={u.fullName} status={u.status} 
    country={u.location.country} city={u.location.city}
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