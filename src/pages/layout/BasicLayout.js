import React, { Children } from "react";
import { Layout, Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
const { Header, Content } = Layout;

export default ({ loading = false, children, hideHeader = false }) => {
  return (
    <Layout>
      {!hideHeader && <Header></Header>}
      <Layout>
        <Spin spinning={loading} indicator={antIcon} size="large">
          <Content style={{ height: "100vh" }}>{children}</Content>
        </Spin>
      </Layout>
    </Layout>
  );
};
