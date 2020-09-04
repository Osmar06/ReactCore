import React from "react";
import Router from "routes/Router";
import { AppContextProvider } from "services/auth/AppContext";
import createStore from "../../store";
import { StoreProvider } from "easy-peasy";
import { LocaleContextProvider } from "services/locale/LocaleContext";
const store = createStore();

const App = () => {
  return (
    <StoreProvider store={store}>
      <LocaleContextProvider>
        <AppContextProvider>
          <Router />
        </AppContextProvider>
      </LocaleContextProvider>
    </StoreProvider>
  );
};

export default App;
