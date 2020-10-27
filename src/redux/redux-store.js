import profileReducer from './profile-reducer'; 
import dialogsReducer from './dialogs-reducer'; 
import sitebarReducer from './sitebar-reducer'; 
import usersReducer from './users-reducer'; 

import { createStore, combineReducers} from "redux";
let reducers = combineReducers({
    profilePage:profileReducer,
    dialogsPage:dialogsReducer,
    sitebar:sitebarReducer,
    usersPage: usersReducer,
});
let store = createStore(reducers);

export default store;