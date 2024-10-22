import { Card, Flex } from "antd";
import React, { useState } from "react";
import ProfileImgName from "./post/ProfileImgName.jsx";
import MoreInfo from "./post/MoreInfo.jsx";
const Post = ({ post }) => {
  console.log(post);
  return (
    <Card>
      <Flex vertical>
        <Flex>
          <ProfileImgName
            userId={post.id}
            profileImg={post.profileImg}
            userName={post.userName}
          ></ProfileImgName>
          <MoreInfo></MoreInfo>
        </Flex>
      </Flex>
    </Card>
  );
};

export default Post;
