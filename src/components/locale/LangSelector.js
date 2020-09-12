import React, { useEffect } from "react";
import { Select } from "antd";
import useLocale from "services/locale";
import { Locales } from "common/constants";
import useStyles from "styles";

export default () => {
  const classes = useStyles();
  const { setLocale, locale } = useLocale();

  return (
    <Select
      onChange={(value) => setLocale(value)}
      className={classes.select}
      defaultValue={locale}
    >
      <Select.Option value={Locales.SPANISH}>Español</Select.Option>
      <Select.Option value={Locales.ENGLISH}>English</Select.Option>
    </Select>
  );
};
