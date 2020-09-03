import React from "react";
import { Breadcrumb } from "antd";
import { HomeOutlined } from "@ant-design/icons";

export default ({ routes = [] }) => {
  return (
    <Breadcrumb>
      <Breadcrumb.Item>
        <HomeOutlined />
      </Breadcrumb.Item>
    </Breadcrumb>
  );
};
