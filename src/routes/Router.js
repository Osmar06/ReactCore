import React from "react";
import { HomePage, LoginPage } from "pages";
import { Switch, Route } from "react-router-dom";
import Routes from ".";
import PrivateRoute from "./PrivateRoute";

export const Router = () => {
  return (
    <Switch>
      <Route exact path={Routes.LOGIN} component={LoginPage} />
      <PrivateRoute exact path={Routes.HOME} component={HomePage} />
    </Switch>
  );
};
