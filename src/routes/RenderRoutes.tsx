import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { RouteStructureProps } from '.';
import { RouteWithSubRoutes } from './RouteWithSubRoutes';
import { LoginRoutePaths } from '../modules/views/auth/config/routes';

export interface RenderRoutesProps {
  routes?: Array<RouteStructureProps>;
}

export const RenderRoutes: React.FC<RenderRoutesProps> = ({ routes }) => (
  <Switch>
    <Redirect exact from="/" to={LoginRoutePaths.Login} />
    {routes?.map(route => (
      <RouteWithSubRoutes {...route} key={route.key} />
    ))}
    <Route component={() => <h1>Not Found!</h1>} />
  </Switch>
);
