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
    key: "two",
    label: <Link to="two">두번째</Link>,
  },
  {
    key: "three",
    label: <Link to="three">아직없음</Link>,
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
