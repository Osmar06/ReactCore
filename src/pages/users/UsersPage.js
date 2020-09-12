import React, { useEffect } from "react";
import { MainLayout } from "pages";
import { Table } from "components";
import { useStoreActions, useStoreState } from "easy-peasy";
import { Status } from "common/constants";
import { useHistory } from "react-router-dom";
import Routes from "routes";
import { PlusOutlined, FormOutlined } from "@ant-design/icons";
import { FormattedMessage } from "react-intl";

export default () => {
  const history = useHistory();
  const getUsers = useStoreActions((actions) => actions.users.getData);
  const { users = [], status } = useStoreState((state) => ({
    users: state.users.list,
    status: state.users.status,
  }));

  useEffect(() => {
    getUsers();
  }, []);

  const isLoading = status === Status.FETCHING;

  const actions = [
    { icon: <PlusOutlined />, handler: () => alert("Header Action") },
  ];

  const columns = [
    {
      dataIndex: "email",
      title: <FormattedMessage id="field.email" />,
      type: "link",
    },
    {
      dataIndex: "first_name",
      title: <FormattedMessage id="field.firstName" />,
    },
    { dataIndex: "last_name", title: <FormattedMessage id="field.lastName" /> },
    {
      dataIndex: "avatar",
      title: <FormattedMessage id="field.photo" />,
      type: "image",
    },
    {
      title: <FormattedMessage id="field.actions" />,
      type: "action",
      actions: [
        {
          icon: <FormOutlined />,
          handler: (record) => history.push(`${Routes.USERS}/${record.id}`),
        },
      ],
    },
  ];

  return (
    <MainLayout
      loading={isLoading}
      title={<FormattedMessage id="page.users" />}
      actions={actions}
      selectedKey="users"
      navigation={["menu.users"]}
    >
      <Table columns={columns} data={users} />
    </MainLayout>
  );
};
