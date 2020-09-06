import React, { useEffect, useCallback, useContext } from "react";
import { AppState, Storage } from "common/constants";
import { useStoreActions, useStoreState } from "easy-peasy";
import StorageService from "../storage/StorageService";

const AppStateContext = React.createContext();

export const useAppContext = () => {
  return useContext(AppStateContext);
};

export const AppContextProvider = ({ children }) => {
  const { loginUser, setState, checkLogin } = useStoreActions((actions) => ({
    loginUser: actions.login.loginUser,
    setState: actions.login.changeAppState,
    checkLogin: actions.login.checkLogin,
  }));

  const { state, status } = useStoreState((store) => ({
    state: store.login.appstate,
    status: store.login.status,
  }));

  const logout = useCallback(async () => {
    StorageService.remove(Storage.CREDENTIALS);
    setState(AppState.PUBLIC);
  }, [setState]);

  const login = useCallback(
    (reqData) => {
      loginUser(reqData);
    },
    [loginUser]
  );

  const success = state === AppState.PRIVATE;

  const currentUser = StorageService.get(Storage.CREDENTIALS) || {};

  // check loggedin on mount
  useEffect(() => {
    state === AppState.UNKNOWN && checkLogin();
  }, [checkLogin, state]);

  return (
    <AppStateContext.Provider
      value={{
        state,
        status,
        logout,
        login,
        success,
        currentUser,
      }}
    >
      {children}
    </AppStateContext.Provider>
  );
};

export default AppStateContext;
