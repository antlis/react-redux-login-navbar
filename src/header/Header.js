import {Switch, Route} from 'react-router-dom'
import * as React from "react";
import {NavBar} from "../_components/navbar/Navbar";

export const Header = () => (
    <main>
        <Route path='/index' component={NavBar}/>
    </main>
)