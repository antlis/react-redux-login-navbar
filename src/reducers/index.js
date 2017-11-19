import {combineReducers} from 'redux';

import {authentication} from './authenticationReducer';
import {users} from './usersReducer';
import {alert} from './alertReducer';
import {translate} from "./translateReducer";
import {journals} from "./journalsReducer";
import {journalsFilter} from "./filterReducer";

const rootReducer = combineReducers({
    authentication,
    translate,
    users,
    journals,
    alert,
    journalsFilter
});

export default rootReducer;