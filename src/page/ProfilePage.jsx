import { Flex, Layout, Menu } from "antd";
import ProfileInfo from "../components/profile/ProfileInfo";
import { Content, Header } from "antd/es/layout/layout";
import { useEffect, useState } from "react";
import MyPosts from "../components/profile/MyPosts";
import LikePosts from "../components/profile/LikePosts";
import { getMenuItem } from "../lib/menuItem";
import { BookOutlined, LikeOutlined } from "@ant-design/icons";
import { useRecoilState } from "recoil";
import { loginUserId } from "../lib/atom";

const ProfilePage = () => {
  const items = [
    getMenuItem("게시물", "my", <BookOutlined />),
    getMenuItem("좋아요", "like", <LikeOutlined />),
  ];
  const [whoPosts, setWho] = useState("my");
  const [userInfo, setUserInfo] = useRecoilState(loginUserId);

  return (
    <Flex vertical>
      <ProfileInfo />
      <Layout>
        <Header style={{ display: "flex", justifyContent: "center" }}>
          <Menu
            selectedKeys={whoPosts}
            theme="dark"
            mode="horizontal"
            items={items}
            onClick={(e) => setWho(e.key)}
          />
        </Header>

        <Content>
          {whoPosts === "my" ? <MyPosts></MyPosts> : <LikePosts></LikePosts>}
        </Content>
      </Layout>
    </Flex>
  );
};

export default ProfilePage;
