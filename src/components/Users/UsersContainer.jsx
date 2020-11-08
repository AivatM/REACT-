import React from 'react';
import { connect } from 'react-redux';
import { follow, setCurrentPage, setIsFetching, setUsers,/*  setUsersTotalCount */ unFollow, toogleFollowingProgress } from '../../redux/users-reducer';
import * as axios from 'axios';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
import { userAPI } from '../../api/api';


class UsersAPIComponent extends React.Component {

    componentDidMount() {
        this.props.setIsFetching(true);
        userAPI.getUsers(this.props.currentPage, this.props.pageSize)
        .then(data => {
            this.props.setIsFetching(false);
            this.props.setUsers(data.items); 
            // this.props.setTotalCount(response.data.totalCount);
        });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        this.props.setIsFetching(true);
        userAPI.getUsers(pageNumber, this.props.pageSize)
       .then(data => {
            this.props.setIsFetching(false);
            this.props.setUsers(data.items);
        });
    }

    render() {
        return <>
        {this.props.isFetching ?  <Preloader/>: null}
        <Users users={this.props.users}
        totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        follow={this.props.follow}
        unFollow={this.props.unFollow}
        onPageChanged={this.onPageChanged}
        toogleFollowingProgress={this.props.toogleFollowingProgress}
        followingInProgress={this.props.followingInProgress}/>
        </>
    }
}

let mapStateToProps = (state) => {
    return{
        users:state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
    }
}


const UsersContainer = connect(mapStateToProps, {
    follow,
    unFollow,
    setUsers,
    setCurrentPage,
    // setTotalCount,
    setIsFetching,
    toogleFollowingProgress,
})(UsersAPIComponent);

export default UsersContainer;