import React from "react";
import { Layout, Menu } from "antd";
import useStyles from "styles";
import Logo from "./Logo";
import { Icon } from "components";
import { Link } from "react-router-dom";
import Routes from "routes";
const { Sider } = Layout;

export default ({ collapsed, ...props }) => {
  const classes = useStyles();
  return (
    <Sider collapsed={collapsed} {...props} className={classes.sidebar}>
      <Logo text="Native Core" />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={["home"]}>
        <Menu.Item key="home">
          <Icon type="home" />
          <span>Home</span>
          <Link to={Routes.HOME} />
        </Menu.Item>
        <Menu.Item key="resource">
          <Icon type="pie-chart" />
          <span>Resources</span>
          <Link to={Routes.RESOURCES} />
        </Menu.Item>
      </Menu>
    </Sider>
  );
};
