import React, { useState } from "react";
import { Layout, Spin } from "antd";
import { Sider, Breadcrumb, Icon, UserMenu } from "components";
import useStyles from "styles";

const { Header, Content } = Layout;

export default ({ loading = false, children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const classes = useStyles();

  const onToggleMenu = () => setCollapsed(!collapsed);

  return (
    <Layout>
      <Sider collapsed={collapsed} />
      <Layout>
        <Header>
          <Icon
            type={collapsed ? "menu" : "arrow-left"}
            onClick={onToggleMenu}
            className={classes.trigger}
          />
          <UserMenu />
        </Header>
        <Spin
          spinning={loading}
          indicator={<Icon type="loading" className={classes.loading} spin />}
          size="large"
        >
          <Content className={classes.mainContent}>
            <Breadcrumb />
            <div className={classes.innerContent}>{children}</div>
          </Content>
        </Spin>
      </Layout>
    </Layout>
  );
};
