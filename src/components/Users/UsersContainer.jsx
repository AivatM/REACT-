import { connect } from 'react-redux';
import Users from './Users';
import { followCreator, setCurrentPageCreator, setUsersCreator,/*  setUsersTotalCountCreator */ unFollowCreator } from '../../redux/users-reducer';

let mapStateToProps = (state) => {
    return{
        users:state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return{
        follow: (userId) => {dispatch(followCreator(userId));},
        unFollow: (userId) => {dispatch(unFollowCreator(userId));},
        setUsers: (users) => {dispatch(setUsersCreator(users))},
        setCurrentPage: (currentPage) => {dispatch(setCurrentPageCreator(currentPage))},
        // setTotalCount: (totalCount) => {dispatch(setUsersTotalCountCreator(totalCount))},
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;