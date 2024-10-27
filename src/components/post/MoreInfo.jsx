import React from "react";
import { Space, Typography } from "antd";
const { Text } = Typography;

const MoreInfo = ({ postInfo }) => {
  console.log("포스트 인포", postInfo);
  return (
    <Space direction="vertical" style={{ width: "100%" }}>
      <Text>{postInfo.content}</Text>
      <Space>
        <Text strong>좋아요 {postInfo.likeCnt}개</Text>
        <Text type="secondary">댓글 {postInfo.commentCnt}개</Text>
      </Space>
    </Space>
  );
};

export default MoreInfo;
