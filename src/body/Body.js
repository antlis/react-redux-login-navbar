import {Switch, Route} from 'react-router-dom'
import * as React from "react";
import {Orders, Users, Devices, Journals, Groups, Sanctions, ServiceInfo} from '../_components'
import {Filter} from "../_components/journals/filter";

export const Body = () => (
    <main>
        <Switch>
            <Route path='/index/orders' component={Filter}/>
            <Route path='/index/users' component={Users}/>
            <Route path='/index/devices' component={Devices}/>
            <Route path='/index/journals' component={Journals}/>
            <Route path='/index/groups' component={Groups}/>
            <Route path='/index/sanctions' component={Sanctions}/>
            <Route path='/index/serviceInfo' component={ServiceInfo}/>
        </Switch>
    </main>
)