import React from "react";
import { Skeleton, Spin } from "antd";
import useStyles from "styles";
import { LoadingOutlined } from "@ant-design/icons";

export default ({ skeleton = false, loading = false, children }) => {
  const classes = useStyles();
  return skeleton ? (
    <Skeleton loading={loading}>{children}</Skeleton>
  ) : (
    <Spin
      spinning={loading}
      indicator={<LoadingOutlined className={classes.loading} />}
      size="large"
    >
      {children}
    </Spin>
  );
};
