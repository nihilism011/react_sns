import React, { useState } from "react";
import { Card, Divider } from "antd";
import ProfileImgName from "./ProfileImgName.jsx";
import MoreInfo from "./MoreInfo.jsx";
import ImgSlider from "./ImgSlider.jsx";
import LikeBtn from "../LikeBtn.jsx";
import CommentBtn from "../CommentBtn.jsx";
const Post = ({ post }) => {
  const [commentCnt, setCommentCnt] = useState(post.commentCnt);
  return (
    <Card
      style={{
        width: 500,
        borderRadius: 8,
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        padding: 16,
      }}
    >
      <div style={{ paddingBottom: 8 }}>
        <ProfileImgName
          userInfo={{ profileImg: post.profileImg, userName: post.userName }}
        />
      </div>
      <Divider style={{ margin: "8px 0" }} />
      <ImgSlider imgList={post.imgName} />
      <Divider style={{ margin: "8px 0" }} />
      <div style={{ display: "flex" }}>
        <LikeBtn postId={post.postId} likeCnt={post.likeCnt} />
        <CommentBtn postId={post.postId} commentCnt={commentCnt} />
      </div>
      <MoreInfo postInfo={post} setCommentCnt={setCommentCnt} />
    </Card>
  );
};

export default Post;
