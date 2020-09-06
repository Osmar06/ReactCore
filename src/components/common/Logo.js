import React from "react";
import { Typography } from "antd";
import useStyles from "styles";
import { CenterContent } from "components";
const { Title } = Typography;

export default ({ text }) => {
  const classes = useStyles();
  return (
    <div className={classes.logo}>
      <CenterContent>
        <Title level={4} className={classes.lightText} ellipsis>
          {text}
        </Title>
      </CenterContent>
    </div>
  );
};
