import React from 'react'
import {Route, BrowserRouter as Router} from 'react-router-dom'
import ReactDOM from 'react-dom';
import './index.css';
import Dashboard from './Components/Dashboard'
import Issues from './Components/Issues'
import Elaborate from './Components/Elaborate'
import BackgroundHOC from './Components/BackgroundHOC'
import * as Routes from './Routes/Routes'

const routes = (
  <Router>
    {/* <Route path={Routes.LANDING} component={}></Route>
    <Route path={Routes.LOGIN} component={}></Route>
    <Route path={Routes.LOGOUT} component={}></Route> */}
    <Route path={Routes.DASHBOARD} component={Dashboard}></Route>
    <Route path={Routes.ISSUES} component={Issues}></Route>
    <Route path={Routes.ELABORATE} component={BackgroundHOC(Elaborate)}></Route>
  </Router>
)

ReactDOM.render(
  routes,
  document.getElementById('root')
);
