import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from '../home/Home';
import Admin from '../admin/Admin';

const Routes = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/admin" component={Admin} />
      </Switch>
    </div>
  </Router>
);

export default Routes;
