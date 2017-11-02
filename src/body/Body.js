import { Switch, Route } from 'react-router-dom'
import {Journals} from "../_components/Journals";
import {Sanctions} from "../_components/Sanctions";
import {NavBar} from "../Navbar/Navbar";
import * as React from "react";
export const Body = () => (
    <main>
        <Switch>
            <Route path='/journals' component={Journals}/>
            <Route path='/sanctions' component={Sanctions}/>
        </Switch>
    </main>
)