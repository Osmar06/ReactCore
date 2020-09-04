import React from "react";
import { useStorage } from "services/storage";
import { Locales, Storage } from "common/constants";
import { IntlProvider } from "react-intl";
import { ConfigProvider } from "antd";
import LocaleService from "./LocaleService";

const LocaleContext = React.createContext();

export const LocaleContextProvider = ({ children }) => {
  const [locale, setLocale] = useStorage(Storage.LOCALE, Locales.SPANISH);

  return (
    <LocaleContext.Provider
      value={{
        locale: locale,
        translate: LocaleService.get,
        setLocale: setLocale,
      }}
    >
      <IntlProvider {...LocaleService.getIntlProvider()}>
        <ConfigProvider {...LocaleService.getAntProvider()}>
          {children}
        </ConfigProvider>
      </IntlProvider>
    </LocaleContext.Provider>
  );
};

export default LocaleContext;
