import React from 'react'
import {Route, BrowserRouter as Router} from 'react-router-dom'
import ReactDOM from 'react-dom';
import './index.css';
import Dashboard from './Components/Dashboard'

const routes = (
  <Router>
    <Route path="/dashboard" component={Dashboard}></Route>
  </Router>
)

ReactDOM.render(
  routes,
  document.getElementById('root')
);
