import { StorageService } from "../storage";
import locales from "../../languages";
import english from "antd/es/locale/en_US";
import spanish from "antd/es/locale/es_ES";
import { Storage, Locales } from "common/constants";

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

const getLocale = () => StorageService.get(Storage.LOCALE) || Locales.SPANISH;

const getMessages = (locale) => locales[locale || getLocale()] || {};

const getIntlProvider = () => {
  return {
    locale: getLocale(),
    messages: getMessages(),
  };
};

const getAntProvider = () => {
  switch (getLocale()) {
    case Locales.SPANISH:
      return { locale: spanish };
    case Locales.ENGLISH:
      return { locale: english };
    default:
      return { locale: spanish };
  }
};

export default {
  get,
  getMessages,
  getLocale,
  getAntProvider,
  getIntlProvider,
};
