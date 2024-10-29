import {
  HomeOutlined,
  RightCircleOutlined,
  SearchOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { getMenuItem } from "../lib/menuItem";
import { Link, useLocation } from "react-router-dom";
import { Menu, Layout, theme, Space, Button } from "antd";
import React, { useState } from "react";
const { Sider } = Layout;

const MySider = () => {
  const items = [
    getMenuItem(<Link to="/">Home</Link>, "home", <HomeOutlined />),
    getMenuItem(<Link>search</Link>, "search", <SearchOutlined />),
    getMenuItem(
      <Link to="PostPage">글쓰기</Link>,
      "PostPage",
      <RightCircleOutlined />
    ),
    getMenuItem(<Link to="profile">프로필</Link>, "profile", <UserOutlined />),
  ];
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const urlObj = useLocation();
  return (
    <Sider
      style={{ position: "fixed", height: "100vh" }}
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
    >
      <div>
        <Space>asdf</Space>
      </div>
      <div className="demo-logo-vertical" />
      <Menu
        theme="dark"
        selectedKeys={[urlObj.pathname.replace("/", "").replace(/\/.+/, "")]}
        mode="inline"
        items={items}
      />
    </Sider>
  );
};

export default MySider;
