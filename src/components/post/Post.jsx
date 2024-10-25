import { Card, Flex } from "antd";
import React, { useState } from "react";
import ProfileImgName from "./ProfileImgName.jsx";
import MoreInfo from "./MoreInfo.jsx";
import ImgSlider from "./ImgSlider.jsx";
const Post = ({ post }) => {
  console.log("포스트", post);
  return (
    <Card>
      <Flex vertical>
        <Flex vertical>
          <ProfileImgName
            userInfo={{ profileImg: post.profileImg, userName: post.userName }}
          ></ProfileImgName>
          (나중 삭제)포스트아이디 : {post.postId}
          <ImgSlider imgList={post.imgName} />
          <MoreInfo></MoreInfo>
        </Flex>
      </Flex>
    </Card>
  );
};

export default Post;
