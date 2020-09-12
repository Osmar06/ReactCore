import React from "react";
import { Dropdown, Menu, Avatar } from "antd";
import useStyles from "styles";
import { FormattedMessage } from "react-intl";
import useAuth from "services/auth";
import { UserOutlined, LogoutOutlined } from "@ant-design/icons";

export default () => {
  const classes = useStyles();
  const { logout, currentUser } = useAuth();

  const getMenu = () => (
    <Menu>
      <Menu.Item>
        <span>{currentUser.email}</span>
      </Menu.Item>
      <Menu.Item onClick={logout}>
        <LogoutOutlined />
        <span>
          <FormattedMessage id="menu.logout" />
        </span>
      </Menu.Item>
    </Menu>
  );
  return (
    <Dropdown overlay={getMenu()} trigger={["click"]}>
      <Avatar icon={<UserOutlined />} className={classes.avatar} />
    </Dropdown>
  );
};
