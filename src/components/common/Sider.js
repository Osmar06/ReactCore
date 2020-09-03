import React from "react";
import { Layout, Menu } from "antd";
const { Sider } = Layout;

export default () => {
  return (
    <Sider>
      <Menu>
        <Menu.Item>Text 1</Menu.Item>
      </Menu>
    </Sider>
  );
};
