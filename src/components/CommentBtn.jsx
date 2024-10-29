import React, { useEffect, useState } from "react";
import { HeartOutlined, HeartFilled, MessageOutlined } from "@ant-design/icons";
const CommentBtn = ({ postId, commentCnt }) => {
  const [com, setCom] = useState(commentCnt);
  useEffect(() => {
    setCom(commentCnt);
  }, [commentCnt]);
  const [modal, setModal] = useState(false);
  const modalOpen = () => {
    setModal(true);
  };
  return (
    <div style={{ fontSize: 20 }}>
      <MessageOutlined onClick={modalOpen} /> {com}
    </div>
  );
};

export default CommentBtn;
