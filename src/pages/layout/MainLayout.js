import React, { useState } from "react";
import { Layout, Spin, PageHeader, Button } from "antd";
import { Sider, Breadcrumb, Icon, UserMenu } from "components";
import useStyles from "styles";

const { Header, Content } = Layout;

export default ({ loading = false, title, actions = [], children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const classes = useStyles();

  const onToggleMenu = () => setCollapsed(!collapsed);

  const getActions = () =>
    actions.map((action, index) => (
      <Button
        type={action.type || "primary"}
        className="margin-bottom-sm"
        onClick={action.handler}
        key={index}
      >
        <Icon type={action.icon} />
        <span>{action.text}</span>
      </Button>
    ));

  return (
    <Layout>
      <Sider collapsed={collapsed} />
      <Layout style={{ marginLeft: collapsed ? 80 : 200 }}>
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
            <div className={classes.innerContent}>
              {title && <PageHeader title={title} extra={getActions()} />}
              {children}
            </div>
          </Content>
        </Spin>
      </Layout>
    </Layout>
  );
};
