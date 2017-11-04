import {Switch, Route} from 'react-router-dom'
import * as React from "react";
import {Orders, Users, Devices, Journals, Groups, Sanctions, ServiceInfo} from '../_components'

export const Body = () => (
    <main>
        <Switch>
            <Route path='/orders' component={Orders}/>
            <Route path='/users' component={Users}/>
            <Route path='/devices' component={Devices}/>
            <Route path='/journals' component={Journals}/>
            <Route path='/groups' component={Groups}/>
            <Route path='/sanctions' component={Sanctions}/>
            <Route path='/serviceInfo' component={ServiceInfo}/>
        </Switch>
    </main>
)