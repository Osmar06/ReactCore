import React from "react";
import { Layout, Spin } from "antd";
import { Icon } from "components";
import useStyles from "styles";
const { Header, Content } = Layout;

export default ({ loading = false, children, hideHeader = false }) => {
  const classes = useStyles();
  return (
    <Layout>
      {!hideHeader && <Header></Header>}
      <Layout>
        <Spin
          spinning={loading}
          indicator={<Icon type="loading" className={classes.loading} spin />}
          size="large"
        >
          <Content style={{ height: "100vh" }}>{children}</Content>
        </Spin>
      </Layout>
    </Layout>
  );
};
