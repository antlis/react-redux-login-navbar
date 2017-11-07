import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom'
import PropTypes from 'prop-types'
import LoginPage from "./LoginPage";
import DevTools from "./DevTools";
import NavBar from "./Navbar";
import {Provider} from 'react-redux'
import Journals from '../_components/journals/journals'
import {Orders, Users, Devices, Groups, Sanctions, ServiceInfo} from '../_components'

const Root = ({store}) => (
    <Provider store={store}>
        <div>
            <Route path='/' component={NavBar}/>
            <Switch>
                <Route path='/orders' component={Orders}/>
                <Route path='/users' component={Users}/>
                <Route path='/devices' component={Devices}/>
                <Route path='/journals' component={Journals}/>
                <Route path='/groups' component={Groups}/>
                <Route path='/sanctions' component={Sanctions}/>
                <Route path='/serviceInfo' component={ServiceInfo}/>
            </Switch>
            <Route path="/login" component={LoginPage}/>
            <DevTools/>
        </div>
    </Provider>
);

Root.propTypes = {
    store: PropTypes.object.isRequired,
};

export default Root