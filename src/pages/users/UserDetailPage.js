import React, { useEffect, createRef } from "react";
import { MainLayout } from "pages";
import { FormInput, CenterContent } from "components";
import { useStoreActions, useStoreState } from "easy-peasy";
import { Status } from "common/constants";
import { Form, Upload } from "antd";
import { useParams } from "react-router-dom";
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
    <MainLayout loading={isLoading} title="User Detail">
      <Form layout="horizontal" initialValues={user} {...formInputLayout}>
        <CenterContent>
          <Upload>
            <img src={user.avatar} />
          </Upload>
        </CenterContent>
        <FormInput name="email" label="Email" />
        <FormInput name="first_name" label="Fist Name" />
        <FormInput name="last_name" label="Last Name" />
      </Form>
    </MainLayout>
  );
};
