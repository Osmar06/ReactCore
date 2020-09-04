import React, { useContext } from "react";
import LocaleContext from "./LocaleContext";

const useLocale = () => {
  return useContext(LocaleContext);
};

export default useLocale;
