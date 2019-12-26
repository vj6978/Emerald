import React from 'react'
import {Route, BrowserRouter as Router} from 'react-router-dom'
import ReactDOM from 'react-dom';
import './index.css';
import Timeline from './Components/Timeline'

const routes = (
  <Router>
    <Route path="/timeline" component={Timeline}></Route>
  </Router>
)

ReactDOM.render(
  routes,
  document.getElementById('root')
);
