import React from "react";
import { Breadcrumb } from "antd";
import { Link } from "react-router-dom";
import { HomeOutlined } from "@ant-design/icons";
import Routes from "routes";
import { FormattedMessage } from "react-intl";

export default ({ navigation = [] }) => {
  const getNavigation = () =>
    navigation.map((nav, index) => {
      if (nav instanceof Object) {
        const { title, route, icon } = nav;
        return (
          <Breadcrumb.Item key={index}>
            <Link to={route}>
              {icon}
              <span>{title}</span>
            </Link>
          </Breadcrumb.Item>
        );
      }

      return (
        <Breadcrumb.Item key={index}>
          {<FormattedMessage id={nav} />}
        </Breadcrumb.Item>
      );
    });
  return (
    <Breadcrumb>
      <Breadcrumb.Item>
        <Link to={Routes.HOME}>
          <HomeOutlined />
        </Link>
      </Breadcrumb.Item>
      {getNavigation()}
    </Breadcrumb>
  );
};
