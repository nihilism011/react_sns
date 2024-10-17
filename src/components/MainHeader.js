import React from "react";
import { Layout, Menu } from "antd";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
const { Header } = Layout;
const menuItem = [
  {
    key: "update",
    label: <Link to="update/1">업데이트</Link>,
  },
  {
    key: "signup",
    label: <Link to="signup">회원가입</Link>,
  },
  {
    key: "testPage",
    label: <Link to="testPage">테스트페이지</Link>,
  },
];

const MainHeader = () => {
  const urlObj = useLocation();
  return (
    <Header
      style={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <Menu
        theme="dark"
        mode="horizontal"
        selectedKeys={[urlObj.pathname.replace("/", "").replace(/\/.+/, "")]}
        items={menuItem}
        style={{
          flex: 1,
          minWidth: 0,
        }}
      />
    </Header>
  );
};

export default MainHeader;
