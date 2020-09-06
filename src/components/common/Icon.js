import React from "react";
import {
  HomeOutlined,
  SearchOutlined,
  UserOutlined,
  LoadingOutlined,
  ArrowRightOutlined,
  ArrowLeftOutlined,
  QuestionOutlined,
  MenuOutlined,
  LogoutOutlined,
} from "@ant-design/icons";

export default ({ type, ...props }) => {
  const getIcon = () => {
    switch (type) {
      case "home":
        return <HomeOutlined {...props} />;
      case "search":
        return <SearchOutlined {...props} />;
      case "user":
        return <UserOutlined {...props} />;
      case "loading":
        return <LoadingOutlined {...props} />;
      case "arrow-right":
        return <ArrowRightOutlined {...props} />;
      case "arrow-left":
        return <ArrowLeftOutlined {...props} />;
      case "menu":
        return <MenuOutlined {...props} />;
      case "logout":
        return <LogoutOutlined {...props} />;
      default:
        return <QuestionOutlined {...props} />;
    }
  };

  return getIcon();
};
