import {
  FormOutlined,
  HomeOutlined,
  RightCircleOutlined,
  SearchOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { getMenuItem } from "../lib/menuItem";
import { Link, useLocation } from "react-router-dom";
import { Menu, Layout, theme } from "antd";
import React, { useState } from "react";
const { Sider } = Layout;

const MySider = () => {
  const items = [
    getMenuItem(<Link to="home">Home</Link>, "home", <HomeOutlined />),
    getMenuItem("Search", "Search", <SearchOutlined />),
    getMenuItem(<Link to="signup">회원가입</Link>, "signup", <FormOutlined />),
    getMenuItem(
      <Link to="testPage">테스트페이지</Link>,
      "testPage",
      <RightCircleOutlined />
    ),
    getMenuItem(<Link to="profile">프로필</Link>, "profile", <UserOutlined />),
    getMenuItem(<Link to="login">로그인</Link>, "login", <UserOutlined />),
  ];
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const urlObj = useLocation();
  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
    >
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
