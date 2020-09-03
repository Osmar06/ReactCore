import React from "react";
import logo from "logo.svg";
import HomePage from "pages/home/HomePage";
import { IntlProvider } from "react-intl";
import { ConfigProvider } from "antd";
import { BrowserRouter } from "react-router-dom";
import { Router } from "routes/Router";
import { AppContextProvider } from "services/auth/AppContext";
import createStore from "../../store";
import { StoreProvider } from "easy-peasy";
const store = createStore();
const App = () => {
  return (
    <StoreProvider store={store}>
      <IntlProvider>
        <ConfigProvider>
          <AppContextProvider>
            <BrowserRouter>{Router()}</BrowserRouter>
          </AppContextProvider>
        </ConfigProvider>
      </IntlProvider>
    </StoreProvider>
  );
};

export default App;
