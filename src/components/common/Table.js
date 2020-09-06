import React from "react";
import { Table, Checkbox, Avatar, Tag, Button } from "antd";
import Moment from "react-moment";
import { Icon } from "components";

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

export default ({ columns = [], data = [], rowKey = "id", ...props }) => {
  const getActionColum = (actions = [], record) => (
    <Button.Group>
      {actions.map((action, index) => {
        const { icon, handler, text } = action;
        return (
          <Button key={index} onClick={() => handler(record)}>
            <Icon type={icon} />
            <span>{text}</span>
          </Button>
        );
      })}
    </Button.Group>
  );

  const getColumnRender = (type, value, record, actions) => {
    switch (type) {
      case columnType.image:
        return <Avatar icon={<Icon type="user" />} src={value} />;
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
      case columnType.action:
        return getActionColum(actions, record);
      default:
        return <div>{value}</div>;
    }
  };

  const getColumns = () =>
    columns.map((column) => {
      const { type, title, dataIndex, actions } = column;
      let columnModel = {
        title,
        dataIndex,
        ellipsis: true,
      };

      if (type)
        columnModel.render = (value, record) =>
          getColumnRender(type, value, record, actions);

      return columnModel;
    });

  return (
    <Table
      columns={getColumns()}
      dataSource={data}
      {...props}
      rowKey={rowKey}
    />
  );
};
