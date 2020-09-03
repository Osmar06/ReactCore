import React from "react";
import { Table, Checkbox, Avatar, Tag } from "antd";
import { SearchOutlined, UserOutlined } from "@ant-design/icons";
import Moment from "react-moment";

const columnType = {
  number: "number",
  date: "date",
  image: "image",
  check: "check",
  tag: "tag",
  link: "link",
  action: "action",
  time: "time",
};

const dataMode = {
  remote: "remote",
  local: "local",
};

export default ({ columns = [], data = [] }) => {
  const getColumnRender = (type, value, record) => {
    switch (type) {
      case columnType.image:
        return <Avatar icon={<UserOutlined />} src={value} />;
      case columnType.date:
        return <Moment format="ll" date={value} />;
      case columnType.time:
        return <Moment format="hh:mm A" date={value} />;
      case columnType.link:
        return <a>{value}</a>;
      case columnType.tag:
        return <Tag color="green">{value}</Tag>;
      case columnType.check:
        return <Checkbox checked={value} />;
      default:
        return <div>{value}</div>;
    }
  };
  const getColumns = () =>
    columns.map((column) => {
      const { type, title, dataIndex } = column;
      let columnModel = {
        title,
        dataIndex,
        ellipsis: true,
      };

      if (type)
        columnModel.render = (value, record) =>
          getColumnRender(type, value, record);

      return columnModel;
    });

  return <Table columns={getColumns()} dataSource={data} />;
};
