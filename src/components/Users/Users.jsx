import React from 'react';
import UsersItem from './UsersItem/UsersItem';
import './Users.css';

const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount/props.pageSize);
        let pages = [];
        for (let i=1; i<=pagesCount; i++) {
            pages.push(i);
        }
    return (
        <section className="users">
            <div className="users__page">
                {pages.map(p => {
                    return <span className={props.currentPage === p && "selectedPage"} onClick={()=> {props.onPageChanged(p);}}>{p}</span>
                })}
            </div>
            <h1 className="users__header">
                Пользователи
            </h1>
            <div className="users__list">
                {props.users.map(u =>
                    <UsersItem id={u.id} photoUrl={u.photos.small} followed={u.followed}
                        name={u.name} status={u.status}
                        country={'u.location.country'} city={'u.location.city'}
                        follow={props.follow}
                        unFollow={props.unFollow} />)}
            </div>
        </section>

    );
}


export default Users;