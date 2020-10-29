import React from 'react';
import styles from './Users.css';
import UsersItem from './UsersItem/UsersItem';
import * as axios from 'axios';

class Users extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
            // this.props.setTotalCount(response.data.totalCount);
        });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
        });
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount/this.props.pageSize);
        let pages = [];
        for (let i=1; i<=pagesCount; i++) {
            pages.push(i);
        }
        return (
            <section className="users">
                <div className="users__page">
                    {pages.map(p => {
                        return <span className={this.props.currentPage === p && "selectedPage"} onClick={()=> {this.onPageChanged(p)}}>{p}</span>
                    })}
                </div>
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