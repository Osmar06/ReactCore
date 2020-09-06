import React from "react";
import { BasicLayout } from "pages";
import { Typography } from "antd";
import { CenterContent } from "components";

export default () => (
  <BasicLayout hideHeader={true} loading={true}>
    <CenterContent span={8}>
      <Typography.Title>Wait a momment...</Typography.Title>
    </CenterContent>
  </BasicLayout>
);
