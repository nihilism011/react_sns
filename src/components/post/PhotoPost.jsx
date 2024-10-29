import React, { useEffect, useState } from "react";
import "../../styles/photoPost.css";
import { CommentOutlined, LikeOutlined } from "@ant-design/icons";
import { getAxios } from "../../lib/restAxios";
const PhotoPost = ({ postInfo }) => {
  const [postCntInfo, setPostCntInfo] = useState({});
  useEffect(() => {
    getAxios("/post/cnt", { postId: postInfo.postId }).then((data) => {
      setPostCntInfo(data);
    });
  }, [postInfo]);
  const postView = (postId) => {};
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
    </div>
  );
};

export default PhotoPost;
