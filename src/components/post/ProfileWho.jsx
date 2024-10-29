import { Avatar, Flex } from "antd";
import React, { useEffect, useState } from "react";
import { getAxios } from "../../lib/restAxios";

const ProfileWho = ({ userId }) => {
  const [userInfo, setUserInfo] = useState({});
  useEffect(() => {
    getAxios("/user/name", { userId: userId }).then((data) => {
      setUserInfo(data);
    });
  }, [userId]);
  return (
    <Flex align="center">
      <Avatar
        size={"small"}
        src={`/profile/${userInfo.profileImg ?? "non.png"}`}
      ></Avatar>
      <div style={{ marginLeft: "10px", fontSize: 15 }}>
        {userInfo.userName}
      </div>
    </Flex>
  );
};

export default ProfileWho;
