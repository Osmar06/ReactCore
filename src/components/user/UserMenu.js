import React from "react";
import { Dropdown, Menu, Avatar } from "antd";
import useStyles from "styles";
import { Icon } from "components";
import { FormattedMessage } from "react-intl";
import useAuth from "services/auth";

export default () => {
  const classes = useStyles();
  const { logout, currentUser } = useAuth();

  const getMenu = () => (
    <Menu>
      <Menu.Item>
        <span>{currentUser.email}</span>
      </Menu.Item>
      <Menu.Item onClick={logout}>
        <Icon type="logout" />
        <span>
          <FormattedMessage id="menu.logout" />
        </span>
      </Menu.Item>
    </Menu>
  );
  return (
    <Dropdown overlay={getMenu()} trigger={["click"]}>
      <Avatar icon={<Icon type="user" />} className={classes.avatar} />
    </Dropdown>
  );
};
