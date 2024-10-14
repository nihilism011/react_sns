import React from "react";
import { Layout, Menu } from "antd";
import { useNavigate } from "react-router-dom";

const { Header } = Layout;
const MainHeader = () => {
  const menuItem = [
    {
      key: 1,
      label: `업데이트 `,
      url: "",
    },
    {
      key: 2,
      label: `두번째 페이지`,
      url: "two",
    },
    {
      key: 3,
      label: `아직 없음 `,
      url: "three",
    },
  ];
  const navigate = useNavigate();
  const menuClick = (e) => {
    if (e.key === "1") {
      navigate("");
    } else if (e.key === "2") {
      navigate("two");
    } else {
      navigate("three");
    }
  };
  return (
    <>
      <Header
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          items={menuItem}
          onClick={menuClick}
          style={{
            flex: 1,
            minWidth: 0,
          }}
        />
      </Header>
    </>
  );
};

export default MainHeader;
