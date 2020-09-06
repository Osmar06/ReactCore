import React from "react";
import { Route, Redirect } from "react-router-dom";
import Routes from "routes";

export default ({ secure = false, component: Component }) => (
  <Route
    render={(props) =>
      secure ? <Component {...props} /> : <Redirect to={Routes.LOGIN} />
    }
  />
);
