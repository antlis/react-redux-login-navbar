import {combineReducers} from 'redux';

import {authentication} from './authenticationReducer';
import {users} from './usersReducer';
import {alert} from './alertReducer';
import {translate} from "./translateReducer";

const rootReducer = combineReducers({
    authentication,
    translate,
    users,
    alert
});

export default rootReducer;