import React from "react";
import { Layout, Menu } from "antd";
import useStyles from "styles";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import Routes from "routes";
import {
  HomeOutlined,
  UserOutlined,
  PieChartOutlined,
} from "@ant-design/icons";
import { FormattedMessage } from "react-intl";

const { Sider } = Layout;

export default ({ collapsed, selectedKey = "home", ...props }) => {
  const classes = useStyles();
  return (
    <Sider
      collapsed={collapsed}
      {...props}
      className={`${classes.sidebar} ${classes.fullHeight}`}
    >
      <Logo text="Native Core" />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={[selectedKey]}>
        <Menu.Item key="home">
          <HomeOutlined />
          <span>
            <FormattedMessage id="menu.home" />
          </span>
          <Link to={Routes.HOME} />
        </Menu.Item>
        <Menu.Item key="users">
          <UserOutlined />
          <span>
            <FormattedMessage id="menu.users" />
          </span>
          <Link to={Routes.USERS} />
        </Menu.Item>
        <Menu.Item key="resources">
          <PieChartOutlined />
          <span>
            <FormattedMessage id="menu.resources" />
          </span>
          <Link to={Routes.RESOURCES} />
        </Menu.Item>
      </Menu>
    </Sider>
  );
};
