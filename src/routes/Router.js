import React from "react";
import {
  HomePage,
  LoginPage,
  ResourcesPage,
  UserDetailPage,
  LogoutPage,
  UsersPage,
} from "pages";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Routes from ".";
import PrivateRoute from "./PrivateRoute";

export default () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={Routes.LOGIN} component={LoginPage} />
        <Route exact path={Routes.LOGOUT} component={LogoutPage} />
        <PrivateRoute exact path={Routes.HOME} component={HomePage} />
        <PrivateRoute exact path={Routes.RESOURCES} component={ResourcesPage} />
        <PrivateRoute exact path={Routes.USERS} component={UsersPage} />
        <PrivateRoute
          exact
          path={`${Routes.USERS}/:id`}
          component={UserDetailPage}
        />
      </Switch>
    </BrowserRouter>
  );
};
