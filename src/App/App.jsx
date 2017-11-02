import React from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';

import {history} from '../_helpers';
import {alertActions} from '../_actions';
import {LoginPage} from "../LoginPage/LoginPage";
import {PrivateRoute} from "../_components/PrivateRoute";
import {NavBar} from "../Navbar/Navbar";
import {Journals} from "../_components/Journals";
import {Body} from "../body/Body";

class App extends React.Component {
    constructor(props) {
        super(props);

        const {dispatch} = this.props;
        history.listen((location, action) => {
            // clear alert on location change
            dispatch(alertActions.clear());
        });
    }

    render() {
        const {alert} = this.props;
        return (
            <div>
                {alert.message &&
                <div className={`alert ${alert.type}`}>{alert.message}</div>
                }
                <Router history={history}>
                    <div>
                        <NavBar/>
                        <Body/>
                    </div>
                </Router>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const {alert} = state;
    return {
        alert
    };
}

const connectedApp = connect(mapStateToProps)(App);
export {connectedApp as App};