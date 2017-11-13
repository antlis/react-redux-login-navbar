import React from "react";
import PropTypes from "prop-types";
import {Provider} from "react-redux";
import {history} from "../_constants/history";
import {Redirect, Route, Router, Switch} from "react-router-dom";
import LoginPage from "./LoginPage";
import {Devices, Groups, Orders, Sanctions, ServiceInfo, Users} from "../_components";
import Journals from "../_components/journals/journals";
import DevTools from "./DevTools";
import App from "./App";

const Root = ({store}) => (
    <Provider store={store}>
        <Router history={history}>
            <div>
                <Route exact path="/" render={() => (
                    <Redirect to="/index"/>
                )}/>
                <Route path='/index' component={App}/>
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
        </Router>
    </Provider>
);

Root.propTypes = {
    store: PropTypes.object.isRequired,
};

export default Root