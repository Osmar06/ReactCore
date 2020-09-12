import React, { useState } from "react";
import { Layout, PageHeader, Button, BackTop, Space } from "antd";
import { Sider, Breadcrumb, UserMenu, Loading } from "components";
import useStyles from "styles";
import { useHistory } from "react-router-dom";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UpOutlined,
} from "@ant-design/icons";
import LangSelector from "components/locale/LangSelector";

const { Header, Content } = Layout;

export default ({
  loading = false,
  title,
  actions = [],
  navigation = [],
  showBack = false,
  skeleton = false,
  selectedKey,
  backToTop = false,
  children,
}) => {
  const [collapsed, setCollapsed] = useState(false);
  const history = useHistory();
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
        {action.icon}
        {action.text && <span>{action.text}</span>}
      </Button>
    ));

  return (
    <Layout>
      <Sider collapsed={collapsed} selectedKey={selectedKey} />
      <Layout style={{ marginLeft: collapsed ? 80 : 200 }}>
        <Header>
          {collapsed ? (
            <MenuUnfoldOutlined
              onClick={onToggleMenu}
              className={classes.trigger}
            />
          ) : (
            <MenuFoldOutlined
              onClick={onToggleMenu}
              className={classes.trigger}
            />
          )}
          <Space className={classes.rigth}>
            <LangSelector />
            <UserMenu />
          </Space>
        </Header>
        <Content className={classes.mainContent}>
          <Breadcrumb navigation={navigation} />
          <div className={classes.innerContent}>
            {title && (
              <PageHeader
                title={title}
                extra={getActions()}
                onBack={showBack ? () => history.goBack() : null}
              />
            )}
            <Loading loading={loading} skeleton={skeleton}>
              {children}
              {backToTop && (
                <BackTop>
                  <Button type="primary" shape="circle" size="large">
                    <UpOutlined />
                  </Button>
                </BackTop>
              )}
            </Loading>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};
