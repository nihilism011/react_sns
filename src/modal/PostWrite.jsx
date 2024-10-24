import { Flex, Layout, Modal, Space } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import React, { useState } from "react";
import ProfileImgName from "../components/post/ProfileImgName";
import { useRecoilState } from "recoil";
import { loginUserId } from "../lib/atom";

const PostWrite = ({ flg, setFlg }) => {
  const [confirm, setConfirm] = useState(false);
  const [userInfo, setUserInfo] = useRecoilState(loginUserId);
  const baseStyle = {
    height: 500,
  };

  return (
    <>
      <Modal
        open={flg}
        footer={null}
        onCancel={() => setConfirm(true)}
        maskClosable={false}
        width={1000}
        closable={false}
      >
        <Layout style={{ backgroundColor: "#222" }}>
          <Header style={{ backgroundColor: "black" }}></Header>
          <Content>
            <Flex>
              <Space style={{ ...baseStyle, width: "70%" }}>
                이미지 업로드
              </Space>
              <Flex vertical style={{ ...baseStyle, width: "30%" }}>
                <Space
                  style={{
                    marginTop: "10px",
                    marginLeft: "10px",
                    backgroundColor: "#222",
                  }}
                >
                  <ProfileImgName userInfo={userInfo} />
                </Space>
              </Flex>
            </Flex>
          </Content>
        </Layout>
      </Modal>
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
