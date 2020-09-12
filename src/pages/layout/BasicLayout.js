import React from "react";
import { Layout } from "antd";
import { Loading } from "components";
import useStyles from "styles";
const { Header, Content } = Layout;

export default ({
  loading = false,
  skeleton = false,
  hideHeader = false,
  children,
}) => {
  const classes = useStyles();
  return (
    <Layout>
      {!hideHeader && <Header></Header>}
      <Layout>
        <Content className={classes.fullHeight}>
          <Loading loading={loading} skeleton={skeleton}>
            {children}
          </Loading>
        </Content>
      </Layout>
    </Layout>
  );
};
