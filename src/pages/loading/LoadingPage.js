import React from "react";
import { BasicLayout } from "pages";
import { Typography } from "antd";
import { CenterContent } from "components";
import useStyles from "styles";

export default () => {
  const classes = useStyles();
  return (
    <BasicLayout hideHeader={true} loading={true}>
      <CenterContent span={4}>
        <Typography.Title className={classes.centerText}>
          Loading...
        </Typography.Title>
      </CenterContent>
    </BasicLayout>
  );
};
