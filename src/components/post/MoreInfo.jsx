import React, { useRef, useState } from "react";
import { Space, Typography } from "antd";
import Comment from "./Comment";
const { Text } = Typography;

const MoreInfo = ({ postInfo, setCommentCnt }) => {
  const [modal, setModal] = useState(false);
  const dialogRef = useRef();
  const handleOpenModal = () => {
    dialogRef.current.showModal();
  };
  return (
    <Space direction="vertical" style={{ width: "100%" }}>
      <Text>{postInfo.content}</Text>
      <Comment postInfo={postInfo} setCommentCnt={setCommentCnt} />
    </Space>
  );
};

export default MoreInfo;
