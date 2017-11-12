import {combineReducers} from 'redux';

import {authentication} from './authenticationReducer';
import {users} from './usersReducer';
import {alert} from './alertReducer';
import {translate} from "./translateReducer";
import {journals} from "./journalsReducer";

const rootReducer = combineReducers({
    authentication,
    translate,
    users,
    journals,
    alert
});

export default rootReducer;