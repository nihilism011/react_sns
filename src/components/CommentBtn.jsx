import React, { useEffect, useState } from "react";
import { HeartOutlined, HeartFilled, MessageOutlined } from "@ant-design/icons";
import { getAxios } from "../lib/restAxios";
const CommentBtn = ({ postId, size = 20, onClick }) => {
  const [comment, setComment] = useState(0);
  useEffect(() => {
    const url = "/post/commentCnt";
    getAxios(url, { postId: postId }).then((cnt) => {
      setComment(cnt);
    });
  }, [postId]);

  return (
    <div onClick={onClick} style={{ fontSize: size, cursor: "pointer" }}>
      <MessageOutlined /> {comment}
    </div>
  );
};

export default CommentBtn;
