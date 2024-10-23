import { Modal } from "antd";
import React, { useState } from "react";

const PostWrite = ({ flg, setFlg }) => {
  const [confirm, setConfirm] = useState(false);

  return (
    <>
      <Modal
        open={flg}
        footer={null}
        onCancel={() => setConfirm(true)}
        maskClosable={false}
      ></Modal>
      <Modal
        open={confirm}
        onOk={() => {
          setConfirm(false);
          setFlg(false);
        }}
        onCancel={() => setConfirm(false)}
      >
        게시글 작성을 중지하시겠습니까?
      </Modal>
    </>
  );
};

export default PostWrite;
