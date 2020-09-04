import React from "react";
import { Col, Row } from "antd";

export default ({ children, ...props }) => {
  return (
    <Row justify="space-around" align="middle" style={{ height: "100%" }}>
      <Col {...props}>{children}</Col>
    </Row>
  );
};
