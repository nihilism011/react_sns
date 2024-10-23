import { Avatar, Flex } from "antd";
import React from "react";

const ProfileImgName = (userInfo) => {
  console.log(userInfo);
  return (
    <Flex align="center">
      <Avatar></Avatar>
      <div>{userInfo.userName}</div>
    </Flex>
  );
};

export default ProfileImgName;
