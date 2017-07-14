import React from 'react';
import { BrowserRouter as Router, Switch, Route, withRouter } from 'react-router-dom';

import Home from '../home/Home';
import Admin from '../admin/Admin';

const Routes = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={withRouter(Home)} handler={Home} />
        <Route exact path="/blog/page/:page" component={withRouter(Home)} handler={Home} />
        <Route exact path="/blog/post/:postId" component={withRouter(Home)} handler={Home} />
        <Route exact path="/admin" component={Admin} />
      </Switch>
    </div>
  </Router>
);

export default Routes;
