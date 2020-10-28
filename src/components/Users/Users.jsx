import React from 'react';
import './Users.css';
import UsersItem from './UsersItem/UsersItem';
import * as axios from 'axios';

class Users extends React.Component {
    
    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            debugger;
            this.props.setUsers(response.data.items);
        });
    }

    render() {
        return (
            <section className="users">
                <h1 className="users__header">
                    Пользователи
                </h1>
                <div className="users__list">
                    {this.props.users.map(u =>
                        <UsersItem id={u.id} photoUrl={u.photos.small} followed={u.followed}
                            name={u.name} status={u.status}
                            country={'u.location.country'} city={'u.location.city'}
                            follow={this.props.follow}
                            unFollow={this.props.unFollow} />)}
                </div>
            </section>

        );
    }
}

export default Users;