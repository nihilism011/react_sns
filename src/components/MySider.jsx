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
import PostWrite from "../modal/PostWrite";
const { Sider } = Layout;

const MySider = () => {
  const [PostWriteFlg, setPostWriteFlg] = useState(false);
  const items = [
    getMenuItem(<Link to="/">Home</Link>, "home", <HomeOutlined />),
    getMenuItem(<Link>search</Link>, "search", <SearchOutlined />),
    getMenuItem(
      <Link to="testPage">테스트페이지</Link>,
      "testPage",
      <RightCircleOutlined />
    ),
    getMenuItem(
      <Link
        onClick={() => {
          setPostWriteFlg(true);
        }}
      >
        글쓰기
      </Link>,
      "postWrite",
      <UserOutlined />
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
      <PostWrite flg={PostWriteFlg} setFlg={setPostWriteFlg}></PostWrite>
    </Sider>
  );
};

export default MySider;
