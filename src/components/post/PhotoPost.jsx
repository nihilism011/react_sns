import React, { useEffect, useState } from "react";
import "../../styles/photoPost.css";
import { CommentOutlined, LikeOutlined } from "@ant-design/icons";
import { getAxios } from "../../lib/restAxios";
import CommentModal from "../modal/CommentModal";
const PhotoPost = ({ postInfo }) => {
  const [postCntInfo, setPostCntInfo] = useState({});
  const modalState = useState(false);
  useEffect(() => {
    getAxios("/post/cnt", { postId: postInfo.postId }).then((data) => {
      setPostCntInfo(data);
    });
  }, [postInfo]);
  const postView = (postId) => {
    modalState[1](true);
  };
  return (
    <div className="myPostsImgBox">
      <img
        className="myPostsImg"
        alt={postInfo.imageName}
        src={`/static/${postInfo.imageName}`}
      />
      <div
        className="likeCntBox"
        onClick={() => {
          postView(postInfo.postId);
        }}
      >
        <LikeOutlined /> {postCntInfo.likeCnt} &nbsp;
        <CommentOutlined /> {postCntInfo.commentCnt}
      </div>
      <CommentModal postId={postInfo.postId} state={modalState}></CommentModal>
    </div>
  );
};

export default PhotoPost;
