import React from "react";
import { Form, Button } from "antd";

const FormButton = ({
  type = "primary",
  icon,
  loading = false,
  text,
  ...props
}) => (
  <Form.Item {...props}>
    <Button type={type} htmlType="submit" loading={loading}>
      {icon}
      {text}
    </Button>
  </Form.Item>
);

export default FormButton;
