import { StorageService } from "./StorageService";
import locales from "../i18n";
import english from "antd/es/locale/en_US";
import spanish from "antd/es/locale/es_ES";

const languages = {
  spanish: "es",
  english: "en",
};

const get = (key, args) => {
  const messages = getMessages();
  const message = messages[key] || key;
  return args ? getFormattedMessage(message, args) : message;
};

const getFormattedMessage = (message, args) => {
  const properties = Object.keys(args);

  properties.forEach((x) => {
    message = message.replace(`{${x}}`, args[x]);
  });

  return message;
};

const getLocale = () => StorageService.get("language") || languages.spanish;

const getMessages = (locale) => locales[locale || getLocale()] || {};

const getIntlProvider = () => {
  return {
    locale: getLocale(),
    messages: getMessages(),
  };
};

const getAntProvider = () => {
  switch (getLocale()) {
    case languages.spanish:
      return { locale: spanish };
    case languages.english:
      return { locale: english };
    default:
      return { locale: spanish };
  }
};

const setLocale = (key) => LocaleStore.set(key || languages.spanish);

export default {
  get,
  getMessages,
  getLocale,
  getAntProvider,
  getIntlProvider,
  setLocale,
  languages,
};
