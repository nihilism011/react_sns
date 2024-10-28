import { Avatar, Flex } from "antd";
import React from "react";

const ProfileImgName = ({ userInfo }) => {
  // console.log(userInfo);
  return (
    <Flex align="center">
      <Avatar src={`/profile/${userInfo.profileImg ?? "non.png"}`}></Avatar>
      <div style={{ marginLeft: "10px" }}>{userInfo.userName}</div>
    </Flex>
  );
};

export default ProfileImgName;
