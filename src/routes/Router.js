import React from "react";
import { HomePage, LoginPage } from "pages";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Routes from ".";
import PrivateRoute from "./PrivateRoute";
import { AppState } from "common/constants";
import { useAppContext } from "services/auth/AppContext";

export default () => {
  const { state } = useAppContext();
  const isPrivate = state === AppState.PRIVATE;
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={Routes.LOGIN} component={LoginPage} />
        <Route exact path={Routes.LOGOUT} component={LoginPage} />
        <PrivateRoute
          exact
          path={Routes.HOME}
          component={HomePage}
          secure={isPrivate}
        />
      </Switch>
    </BrowserRouter>
  );
};
