import React from "react";
import { BasicLayout } from "pages";
import { Form, Card } from "antd";
import { FormInput, CenterContent, FormButton } from "components";
import { FormattedMessage } from "react-intl";
import useAuth from "services/auth";
import { Status } from "common/constants";
import { Redirect } from "react-router-dom";
import Routes from "routes";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

export default () => {
  const { login, success, status } = useAuth();

  const isLoading = status === Status.FETCHING;

  return success ? (
    <Redirect to={Routes.HOME} />
  ) : (
    <BasicLayout hideHeader={true} loading={isLoading}>
      <CenterContent span={8}>
        <Card title={<FormattedMessage id="message.welcome" />}>
          <Form
            {...layout}
            name="basic"
            initialValues={{ remember: true }}
            onFinish={login}
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
            <FormButton {...tailLayout} text="Submit" />
          </Form>
        </Card>
      </CenterContent>
    </BasicLayout>
  );
};
