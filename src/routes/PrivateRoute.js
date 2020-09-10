import React from "react";
import { Route, Redirect } from "react-router-dom";
import Routes from "routes";
import { useAppContext } from "services/auth/AppContext";
import { AppState } from "common/constants";
import LoadingPage from "pages/loading/LoadingPage";

export default ({ component: Component, ...rest }) => {
  const { state } = useAppContext();
  const isPrivate = state === AppState.PRIVATE;
  const isChecking = state === AppState.UNKNOWN;
  return (
    <Route
      {...rest}
      render={(props) =>
        isPrivate ? (
          <Component {...props} />
        ) : isChecking ? (
          <LoadingPage />
        ) : (
          <Redirect to={Routes.LOGIN} />
        )
      }
    />
  );
};
