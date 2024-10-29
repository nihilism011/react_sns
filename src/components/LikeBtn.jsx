import React, { useEffect, useState } from "react";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
import { loginUserId } from "../lib/atom";
import { useRecoilValue } from "recoil";
import { getAxios, postAxios } from "../lib/restAxios";
const LikeBtn = ({ postId, likeCnt }) => {
  const [isLike, setIsLike] = useState(false);
  const [likeCount, setLikeCount] = useState(likeCnt);
  useEffect(() => {
    getAxios("/post/postLike", { postId: postId }).then((data) => {
      setIsLike(data);
    });
  }, [postId]);
  const handleLike = () => {
    postAxios("/post/postLike", { postId: postId, isLike: isLike }).then(
      (data) => {
        if (data) {
          setIsLike(!isLike);
          if (isLike) {
            setLikeCount((prev) => --prev);
          } else {
            setLikeCount((prev) => ++prev);
          }
        }
      }
    );
  };
  if (isLike) {
    return (
      <div style={{ fontSize: 20 }}>
        <HeartFilled onClick={handleLike} /> {likeCount}
      </div>
    );
  } else {
    return (
      <div style={{ fontSize: 20 }}>
        <HeartOutlined onClick={handleLike} /> {likeCount}
      </div>
    );
  }
};

export default LikeBtn;
