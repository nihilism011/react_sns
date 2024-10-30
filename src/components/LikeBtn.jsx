import React, { useEffect, useState } from "react";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
import { getAxios, postAxios } from "../lib/restAxios";
const LikeBtn = ({ postId, size = 20 }) => {
  const [isLike, setIsLike] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  useEffect(() => {
    const isLikeUrl = "/post/postLike";
    const likeCntUrl = "/post/getLikeCnt";
    getAxios(isLikeUrl, { postId: postId }).then((data) => {
      setIsLike(data);
    });
    getAxios(likeCntUrl, { postId: postId }).then((data) => {
      setLikeCount(data);
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
      <div style={{ fontSize: size }}>
        <HeartFilled onClick={handleLike} /> {likeCount}
      </div>
    );
  } else {
    return (
      <div style={{ fontSize: size }}>
        <HeartOutlined onClick={handleLike} /> {likeCount}
      </div>
    );
  }
};

export default LikeBtn;
