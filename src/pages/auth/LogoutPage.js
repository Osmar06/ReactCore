import React from "react";
import useAuth from "services/auth";
import { Redirect } from "react-router-dom";
import Routes from "routes";

export default () => {
  const { logout } = useAuth();
  logout();
  return <Redirect to={Routes.LOGIN} />;
};
