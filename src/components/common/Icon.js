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
  PieChartOutlined,
  FormOutlined,
  PlusOutlined,
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
      case "pie-chart":
        return <PieChartOutlined {...props} />;
      case "form":
        return <FormOutlined {...props} />;
      case "plus":
        return <PlusOutlined {...props} />;
      default:
        return <QuestionOutlined {...props} />;
    }
  };

  return getIcon();
};
