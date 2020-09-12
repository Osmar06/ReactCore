import React, { useEffect } from "react";
import { MainLayout } from "pages";
import { FormInput, CenterContent } from "components";
import { useStoreActions, useStoreState } from "easy-peasy";
import { Status } from "common/constants";
import { Divider, Form, Upload } from "antd";
import { useParams } from "react-router-dom";
import Routes from "routes";
const formInputLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 16 },
};
export default () => {
  const { id: userId } = useParams();
  const [form] = Form.useForm();
  const getById = useStoreActions((actions) => actions.users.getById);
  const { user = {}, status } = useStoreState((state) => ({
    user: state.users.single,
    status: state.users.status,
  }));

  useEffect(() => {
    getById(userId);
  }, []);

  useEffect(() => {
    form.setFieldsValue(user);
  }, [user]);

  const isLoading = status === Status.FETCHING;

  return (
    <MainLayout
      title="User Detail"
      showBack
      loading={isLoading}
      skeleton
      keySelected="resources"
      navigation={[{ title: "Users", route: Routes.USERS }, "Detail"]}
    >
      <Form layout="horizontal" initialValues={user} {...formInputLayout}>
        <CenterContent>
          <Upload>
            <img src={user.avatar} />
          </Upload>
        </CenterContent>
        <Divider plain />
        <FormInput name="email" label="field.email" />
        <FormInput name="first_name" label="field.firstName" />
        <FormInput name="last_name" label="field.lastName" />
      </Form>
    </MainLayout>
  );
};
