const CracoAntDesignPlugin = require("craco-antd");
const theme = require("./src/theme/config");
module.exports = {
  plugins: [
    {
      plugin: CracoAntDesignPlugin,
      options: {
        customizeTheme: theme,
      },
    },
  ],
};
