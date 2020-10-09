import profileReducer from './profile-reducer'; 
import dialogsReducer from './dialogs-reducer'; 
import sitebarReducer from './sitebar-reducer'; 

import { createStore, combineReducers} from "redux";
let reducers = combineReducers({
    profilePage:profileReducer,
    dialogsPage:dialogsReducer,
    sitebar:sitebarReducer,
});
let store = createStore(reducers);

window.store = store;
export default store;