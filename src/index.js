import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom' //import routing

const routing = (
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/:section" component={App} />
    </Switch>
  </Router>
)

ReactDOM.render(
  routing,
  document.getElementById('root')
);
