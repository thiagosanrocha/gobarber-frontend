import React from 'react';
import { Route, Switch } from 'react-router-dom';

import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={SignIn} />
    <Route path="/sign-up" component={SignUp} />
  </Switch>
);

export default Routes;
