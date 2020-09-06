import React from "react";
import { Layout, Menu } from "antd";
import useStyles from "styles";
import Logo from "./Logo";
const { Sider } = Layout;

export default ({ collapsed, ...props }) => {
  const classes = useStyles();
  return (
    <Sider collapsed={collapsed} {...props} className={classes.sidebar}>
      <Logo text="Native Core" />
      <Menu theme="dark" mode="inline">
        <Menu.Item>Text 1</Menu.Item>
      </Menu>
    </Sider>
  );
};
