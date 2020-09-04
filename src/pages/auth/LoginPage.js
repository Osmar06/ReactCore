import React, { createRef } from "react";
import { BasicLayout } from "pages";
import { Form, Button, Card } from "antd";
import { FormInput, CenterContent } from "components";
import { FormattedMessage } from "react-intl";
import useAuth from "services/auth";
import { useStoreState } from "easy-peasy";
import { Status, AppState } from "common/constants";
import { Redirect, Route } from "react-router-dom";
import Routes from "routes";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

export default () => {
  const { login, state } = useAuth();
  const { status } = useStoreState((state) => ({
    status: state.login.status,
  }));

  const loginUser = (values) => {
    login(values);
  };

  const isLoading = status === Status.FETCHING;

  const onFinishFailed = () => {};

  const buttonRef = createRef();

  return state === AppState.PRIVATE ? (
    <Redirect to={Routes.HOME} />
  ) : (
    <BasicLayout hideHeader={true} loading={isLoading}>
      <CenterContent span={8}>
        <Card title={<FormattedMessage id="message.welcome" />}>
          <Form
            {...layout}
            name="basic"
            initialValues={{ remember: true }}
            onFinish={loginUser}
            onFinishFailed={onFinishFailed}
          >
            <FormInput
              label="Email"
              name="email"
              rules={[{ required: true, message: "Please input your email!" }]}
            />

            <FormInput
              label="Password"
              name="password"
              type="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            />
            <FormInput
              {...tailLayout}
              type="check"
              name="remember"
              boxLabel="Remember me"
              valuePropName="checked"
            />

            <Form.Item {...tailLayout}>
              <Button ref={buttonRef} type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </CenterContent>
    </BasicLayout>
  );
};
