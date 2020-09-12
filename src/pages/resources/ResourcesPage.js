import React, { useEffect } from "react";
import { MainLayout } from "pages";
import { useStoreActions, useStoreState } from "easy-peasy";
import { Status } from "common/constants";
import { Card, Col, Divider, Row, Timeline, List, BackTop, Button } from "antd";
import { SmileFilled, UpOutlined } from "@ant-design/icons";
import { FormattedMessage } from "react-intl";

export default () => {
  const getResources = useStoreActions((actions) => actions.resources.getData);
  const { resources = [], status } = useStoreState((state) => ({
    resources: state.resources.list,
    status: state.resources.status,
  }));

  useEffect(() => {
    getResources();
  }, []);

  const isLoading = status === Status.FETCHING;

  const getCards = () =>
    resources.map((item, index) => (
      <Col span={6} key={index}>
        <Card>
          <Card.Meta
            avatar={<SmileFilled style={{ color: item.color }} />}
            title={item.name}
            description={item.pantone_value}
          />
        </Card>
      </Col>
    ));
  const getTimeline = () => (
    <Timeline mode="alternate">
      {resources.map((item, index) => (
        <Timeline.Item color={item.color} key={index}>
          {item.name} {item.year}
        </Timeline.Item>
      ))}
    </Timeline>
  );

  const getList = () => (
    <List
      dataSource={resources}
      itemLayout="horizontal"
      renderItem={(item, index) => (
        <List.Item key={index}>
          <List.Item.Meta
            avatar={<SmileFilled style={{ color: item.color }} />}
            title={item.name}
            description={`${item.pantone_value} ${item.year}`}
          />
        </List.Item>
      )}
    />
  );
  return (
    <MainLayout
      loading={isLoading}
      selectedKey="resources"
      title={<FormattedMessage id="page.resources" />}
      navigation={["menu.resources"]}
      backToTop
    >
      <Divider orientation="left">Cards</Divider>
      <Row gutter={[16, 16]}>{getCards()}</Row>
      <Divider orientation="left">Timeline</Divider>
      {getTimeline()}
      <Divider orientation="left">List</Divider>
      <Row>
        <Col offset={3} span={24}>
          {getList()}
        </Col>
      </Row>
    </MainLayout>
  );
};
