import { Avatar } from "antd";
import React from "react";

const ProfileImgName = (userInfo) => {
  console.log(userInfo);
  return (
    <div>
      <Avatar></Avatar>
      <div>{userInfo.userName}</div>
    </div>
  );
};

export default ProfileImgName;
