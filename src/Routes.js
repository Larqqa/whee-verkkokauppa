import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import Home from './pages/Home';
import Shoppingcart from './pages/Shoppingcart';

const routes = [
  {
    name: 'Etusivu',
    path: '/',
    exact: true,
    component: Home,
    link: true
  },
  {
    name: 'Ostoskori',
    path: '/ostoskori',
    exact: true,
    component: Shoppingcart,
    link: true
  },
];

const Routes = () => {
  return (
    <Switch>
      {routes.map((route, i) =>
        <Route
          key={i}
          exact={route.exact}
          path={route.path}
          component={route.component}
        />
      )}
      <Redirect to="/" />
    </Switch>
  );
};

export default Routes;