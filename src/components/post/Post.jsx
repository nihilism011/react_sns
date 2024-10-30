import React, { useState } from "react";
import { Card, Divider } from "antd";
import ProfileImgName from "./ProfileImgName.jsx";
import MoreInfo from "./MoreInfo.jsx";
import ImgSlider from "./ImgSlider.jsx";
import LikeBtn from "../LikeBtn.jsx";
import CommentBtn from "../CommentBtn.jsx";
import CommentModal from "../modal/CommentModal.jsx";
const Post = ({ post }) => {
  const modalState = useState(false);
  function timeAgo(createdAt) {
    const createdDate = new Date(createdAt);
    const now = new Date();

    const hoursDiff = Math.floor((now - createdDate) / (1000 * 60 * 60));
    const daysDiff = Math.floor(hoursDiff / 24);

    if (daysDiff === 0) {
      return `${hoursDiff}시간 전`;
    } else {
      return `${daysDiff}일 전`;
    }
  }
  return (
    <Card
      style={{
        width: 500,
        borderRadius: 8,
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        padding: 16,
      }}
    >
      <div
        style={{
          paddingBottom: 8,
          display: "flex",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <ProfileImgName
          userInfo={{ profileImg: post.profileImg, userName: post.userName }}
        />
        <div style={{ color: "#555" }}>{timeAgo(post.created_at)}</div>
      </div>
      <Divider style={{ margin: "8px 0" }} />
      <ImgSlider imgList={post.imgName} />
      <div style={{ display: "flex" }}>
        <LikeBtn postId={post.postId} size={20} />
        &nbsp;
        <CommentBtn
          onClick={() => {
            modalState[1](true);
          }}
          postId={post.postId}
          size={20}
        />
      </div>
      <div>{post.content}</div>
      <CommentModal postId={post.postId} state={modalState}></CommentModal>
    </Card>
  );
};

export default Post;
