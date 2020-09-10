import React, { useEffect } from "react";
import { MainLayout } from "pages";
import { Table } from "components";
import { useStoreActions, useStoreState } from "easy-peasy";
import { Status } from "common/constants";

export default () => {
  const getUsers = useStoreActions((actions) => actions.users.getData);
  const { users = [], status } = useStoreState((state) => ({
    users: state.users.data,
    status: state.users.status,
  }));

  useEffect(() => {
    getUsers();
  }, []);

  const isLoading = status === Status.FETCHING;

  const columns = [
    { dataIndex: "email", title: "Email", type: "link" },
    { dataIndex: "first_name", title: "Firstname" },
    { dataIndex: "last_name", title: "Last Name" },
    { dataIndex: "avatar", title: "Photo", type: "image" },
    {
      title: "Action",
      type: "action",
      actions: [
        {
          icon: "arrow-right",
          text: "Edit",
          handler: (record) => alert(`Record ${record.id}`),
        },
      ],
    },
  ];

  return (
    <MainLayout loading={isLoading}>
      <Table columns={columns} data={users} />
    </MainLayout>
  );
};
