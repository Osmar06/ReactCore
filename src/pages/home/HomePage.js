import React, { useEffect } from "react";
import { MainLayout } from "pages";
import { useStoreActions, useStoreState } from "easy-peasy";
import { Status } from "common/constants";
import { FormattedMessage } from "react-intl";

export default () => {
  const getUsers = useStoreActions((actions) => actions.users.getData);
  const { status } = useStoreState((state) => ({
    users: state.users.list,
    status: state.users.status,
  }));

  useEffect(() => {
    getUsers();
  }, []);

  const isLoading = status === Status.FETCHING;

  return (
    <MainLayout
      loading={isLoading}
      title={<FormattedMessage id="page.home" />}
      selectedKey="home"
      navigation={["menu.home"]}
    ></MainLayout>
  );
};
