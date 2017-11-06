import React from 'react';
import {Switch, Route} from 'react-router-dom'
import PropTypes from 'prop-types'
import {Body} from "../body/Body";
import LoginPage from "./LoginPage";
import DevTools from "./DevTools";
import NavBar from "./Navbar";
import {Provider} from 'react-redux'
import {Orders, Users, Devices, Journals, Groups, Sanctions, ServiceInfo} from '../_components'

const Root = ({store}) => (
    <Provider store={store}>
        <div>
            <Route path='/index' component={NavBar}/>
            <Switch>
                <Route path='/index/orders' component={Orders}/>
                <Route path='/index/users' component={Users}/>
                <Route path='/index/devices' component={Devices}/>
                <Route path='/index/journals' component={Journals}/>
                <Route path='/index/groups' component={Groups}/>
                <Route path='/index/sanctions' component={Sanctions}/>
                <Route path='/index/serviceInfo' component={ServiceInfo}/>
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