import React from 'react';
import { connect } from 'react-redux';
import { followCreator, setCurrentPageCreator, setIsFetchingCreator, setUsersCreator,/*  setUsersTotalCountCreator */ unFollowCreator } from '../../redux/users-reducer';
import * as axios from 'axios';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';


class UsersAPIComponent extends React.Component {

    componentDidMount() {
        this.props.setIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setIsFetching(false);
            this.props.setUsers(response.data.items);
            // this.props.setTotalCount(response.data.totalCount);
        });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        this.props.setIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setIsFetching(false);
            this.props.setUsers(response.data.items);
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
        onPageChanged={this.onPageChanged}/>
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
    }
}
let mapDispatchToProps = (dispatch) => {
    return{
        follow: (userId) => {dispatch(followCreator(userId));},
        unFollow: (userId) => {dispatch(unFollowCreator(userId));},
        setUsers: (users) => {dispatch(setUsersCreator(users))},
        setCurrentPage: (currentPage) => {dispatch(setCurrentPageCreator(currentPage))},
        // setTotalCount: (totalCount) => {dispatch(setUsersTotalCountCreator(totalCount))},
        setIsFetching: (isFetching) => {dispatch(setIsFetchingCreator(isFetching))}
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent);

export default UsersContainer;