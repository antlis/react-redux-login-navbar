import React from 'react';
import { render } from 'react-dom';
import { Router } from 'react-router-dom'

import configureStore from "./store/configureStore";
import App from "./containers/Root";
import {history} from "./_constants/history";


const store = configureStore();

render(
        <Router history={history}>
            <App store={store}/>
        </Router>,
    document.getElementById('app')
);