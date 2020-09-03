import React, { Children } from "react";
import { Layout, Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
const { Header, Content } = Layout;

export default ({ loading = false, children }) => {
  return (
    <Layout>
      <Header></Header>
      <Layout>
        <Spin spinning={loading} indicator={antIcon} size="large">
          <Content>{children}</Content>
        </Spin>
      </Layout>
    </Layout>
  );
};