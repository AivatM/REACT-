const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const TOOGLE_IS_FETCHING = 'TOOGLE_IS_FETCHING';
const TOOGLE_IS_FOLLOWING_PROGRESS = 'TOOGLE_IS_FOLLOWING_PROGRESS';
// const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 50,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],
};
const usersReducer = (state=initialState, action) => {
    switch (action.type) {
       case FOLLOW:
           return {
               ...state, 
               users: state.users.map( u => {
                if (u.id === action.userId) {
                   return {...u, followed: true}; 
                }   
                return u;
               })
            }
       case UNFOLLOW:
        return {
            ...state, 
            users: state.users.map( u => {
             if (u.id === action.userId) {
                return {...u, followed: false}; 
             }   
             return u;
            })
         }
        case SET_USERS:
            return {
                ...state,
                users: action.users
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
        case TOOGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case TOOGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching 
                ? [...state.followingInProgress, action.userId] 
                : [...state.followingInProgress.filter(id=> id != action.userId)]
            }
        // case SET_TOTAL_USERS_COUNT:
        //     return {
        //         ...state,
        //         totalUsersCount: action.totalCount
        //     }
        default: 
        return state;
    }
}

export const follow = (userId) => {
    return {type: FOLLOW, userId};
 }
export const unFollow = (userId) => {
    return {type: UNFOLLOW, userId};
 }
export const setUsers = (users) => {
    return {type: SET_USERS, users};
 }
export const setCurrentPage = (currentPage) => {
    return {type: SET_CURRENT_PAGE, currentPage};
 }
export const setIsFetching = (isFetching) => {
    return {type: TOOGLE_IS_FETCHING, isFetching};
 }
export const toogleFollowingProgress = (isFetching, userId) => {
    return {type: TOOGLE_IS_FOLLOWING_PROGRESS, isFetching, userId};
 }
// export const setUsersTotalCount = (totalCount) => {
//     return {type: SET_TOTAL_USERS_COUNT, totalCount};
//  }


 
export default usersReducer;