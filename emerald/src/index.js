import React from 'react'
import {Route, HashRouter as Router} from 'react-router-dom'
import ReactDOM from 'react-dom';
import './index.css';
import Dashboard from './Components/Dashboard'
import Issues from './Components/Issues'
import Elaborate from './Components/Elaborate'
import ShareFiles from './Components/ShareFiles'
import Login from './Components/Login'
import BackgroundHOC from './Components/BackgroundHOC'
import * as Routes from './Routes/Routes'

const routes = (
  <Router>
    {/* <Route path={Routes.LANDING} component={}></Route>*/}
    <Route path={Routes.LOGIN} component={Login}></Route>
    {/* <Route path={Routes.LOGOUT} component={}></Route>  */}
    <Route path={Routes.DASHBOARD} component={BackgroundHOC(Dashboard)}></Route>
    <Route path={Routes.ISSUES} component={BackgroundHOC(Issues)}></Route>
    <Route path={Routes.ELABORATE} component={BackgroundHOC(Elaborate)}></Route>
    <Route path={Routes.SHAREFILES} component={BackgroundHOC(ShareFiles)}></Route>
  </Router>
)

ReactDOM.render(
  routes,
  document.getElementById('root')
);
