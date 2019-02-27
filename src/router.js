import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import FirstPage from './view/firstPage/firstPage';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={FirstPage} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;