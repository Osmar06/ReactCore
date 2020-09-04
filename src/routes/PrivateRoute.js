import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAppContext } from "services/auth/AppContext";
import { AppState } from "common/constants";
import Routes from "routes";

export default ({ secure = false, component: Component }) => {
  return (
    <Route
      render={(props) =>
        secure ? <Component {...props} /> : <Redirect to={Routes.LOGIN} />
      }
    />
  );
};
