import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'

import configureStore from "./store/configureStore";
import App from "./containers/Root";


const store = configureStore();

render(
        <Router>
            <App store={store}/>
        </Router>,
    document.getElementById('app')
);