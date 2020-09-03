import React from "react";
import { BasicLayout } from "pages";
import { Form, Input, Button, Checkbox } from "antd";
import { FormInput } from "components";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

export default () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <BasicLayout>
      <Form
        {...layout}
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <FormInput
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        />

        <FormInput
          label="Password"
          name="password"
          type="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        />

        <FormInput
          {...tailLayout}
          type="select"
          items={[
            { text: "test", value: 1 },
            { text: "test 2", value: 2 },
          ]}
        />

        <FormInput
          {...tailLayout}
          type="check"
          boxLabel="Remember me"
          valuePropName="checked"
        />

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </BasicLayout>
  );
};
