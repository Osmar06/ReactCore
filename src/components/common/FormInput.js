import React from "react";
import {
  Form,
  Input,
  Checkbox,
  DatePicker,
  InputNumber,
  Switch,
  Radio,
  Select,
} from "antd";

const inputTypes = {
  textArea: "textArea",
  password: "password",
  date: "date",
  number: "number",
  check: "check",
  switch: "switch",
  radio: "radio",
  select: "select",
};

const FormInput = ({ type, boxLabel, items = [], onValueChange, ...props }) => {
  const getRadioItems = () =>
    items.map((item) => (
      <Radio.Button value={item.value} key={item.value}>
        {item.text}
      </Radio.Button>
    ));

  const getSelecttems = () =>
    items.map((item) => (
      <Select.Option value={item.value} key={item.value}>
        {item.text}
      </Select.Option>
    ));
  const getInput = () => {
    switch (type) {
      case inputTypes.textArea:
        return <Input.TextArea />;
      case inputTypes.password:
        return <Input.Password />;
      case inputTypes.date:
        return <DatePicker />;
      case inputTypes.number:
        return <InputNumber />;
      case inputTypes.check:
        return <Checkbox>{boxLabel}</Checkbox>;
      case inputTypes.switch:
        return <Switch />;
      case inputTypes.select:
        return <Select onChange={onValueChange}>{getSelecttems()}</Select>;
      case inputTypes.radio:
        return <Radio.Group>{getRadioItems()}</Radio.Group>;
      default:
        return <Input />;
    }
  };
  return <Form.Item {...props}>{getInput()}</Form.Item>;
};

export default FormInput;
