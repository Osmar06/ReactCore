import React from "react";
import { Breadcrumb } from "antd";
import { Icon } from "components";

export default ({ routes = [] }) => {
  return (
    <Breadcrumb>
      <Breadcrumb.Item>
        <Icon type="home" />
      </Breadcrumb.Item>
    </Breadcrumb>
  );
};
