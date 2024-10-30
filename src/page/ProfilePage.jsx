import { Divider, Flex, Layout } from "antd";
import ProfileInfo from "../components/profile/ProfileInfo";
import { Content, Header } from "antd/es/layout/layout";
import { useEffect, useState } from "react";
import MyPosts from "../components/profile/MyPosts";
import { useRecoilState } from "recoil";
import { loginUserId } from "../lib/atom";

const ProfilePage = () => {
  const [whoPosts, setWho] = useState("my");
  const [userInfo, setUserInfo] = useRecoilState(loginUserId);
  return (
    <Flex vertical>
      <ProfileInfo />
      <Divider style={{ margin: "8px 0" }} />
      <MyPosts></MyPosts>
    </Flex>
  );
};

export default ProfilePage;
