import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAppContext } from "services/auth/AppContext";
import { AppState } from "common/constants";
import Routes from "routes";

export default ({ component: Component }) => {
  const { state } = useAppContext();
  const isSecure = state === AppState.PRIVATE;

  return (
    <Route
      render={(props) =>
        isSecure ? <Component {...props} /> : <Redirect to={Routes.LOGIN} />
      }
    />
  );
};
