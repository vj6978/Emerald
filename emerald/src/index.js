import React from 'react'
import {Route, BrowserRouter as Router} from 'react-router-dom'
import ReactDOM from 'react-dom';
import './index.css';
import Dashboard from './Components/Dashboard'
import Issues from './Components/Issues'

const routes = (
  <Router>
    <Route path="/dashboard" component={Dashboard}></Route>
    <Route path="/issues" component={Issues}></Route>
  </Router>
)

ReactDOM.render(
  routes,
  document.getElementById('root')
);
