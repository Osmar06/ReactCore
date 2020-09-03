import React, { useEffect, useCallback, useContext } from "react";
import { AppState } from "common/constants";
import { useStoreActions, useStoreState } from "easy-peasy";
import StorageService from "../StorageService";

const AppStateContext = React.createContext();

export const useAppContext = () => {
  return useContext(AppStateContext);
};

export const AppContextProvider = (props) => {
  const { loginUser, setState, checkLogin } = useStoreActions((actions) => ({
    loginUser: actions.login.loginUser,
    setState: actions.login.changeAppState,
    checkLogin: actions.login.checkLogin,
  }));

  const state = useStoreState((store) => store.login.appstate);

  const logoutUser = useCallback(async () => {
    StorageService.remove("credentials");
    setState(AppState.PUBLIC);
  }, [setState]);

  const logout = useCallback(() => {
    alert(
      "Please comfirm Logout",
      "Are you sure you want to logout from the app",
      [
        {
          text: "Yes, Logout",
          onPress: logoutUser,
        },
        {
          type: "cancel",
          text: "No, Stay here",
        },
      ]
    );
  }, [logoutUser]);

  const login = useCallback(
    (reqData) => {
      loginUser(reqData);
    },
    [loginUser]
  );

  // check loggedin on mount
  useEffect(() => {
    state === AppState.UNKNOWN && checkLogin();
  }, [checkLogin, state]);

  return (
    <AppStateContext.Provider
      value={{
        state,
        logout,
        login,
      }}
    >
      {props.children}
    </AppStateContext.Provider>
  );
};

export default AppStateContext;
