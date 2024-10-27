import {
  Button,
  Flex,
  Input,
  Layout,
  message,
  Modal,
  Space,
  Upload,
} from "antd";
import { Content, Header } from "antd/es/layout/layout";
import React, { useState } from "react";
import ProfileImgName from "../components/post/ProfileImgName";
import { useRecoilValue } from "recoil";
import { loginUserId } from "../lib/atom";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { postAxios } from "../lib/restAxios";

const PostWrite = ({ flg, setFlg }) => {
  const [confirm, setConfirm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [fileList, setFileList] = useState([]);
  const userInfo = useRecoilValue(loginUserId);
  const [content, setContent] = useState("");
  const setInit = () => {
    setConfirm(false);
    setLoading(false);
    setFileList([]);
    setFlg(false);
    setContent("");
  };
  const beforeUpload = (file, files) => {
    const isImage = file.type.startsWith("image/");
    const isVideo = file.type === "video/mp4";
    if (!isImage && !isVideo) {
      message.error("이미지와 mp4 파일만 올릴 수 있습니다.");
      return Upload.LIST_IGNORE;
    }
    if (files.length + fileList.length >= 11) {
      message.error("최대 이미지,영상의 수는 10개 입니다.");
      return Upload.LIST_IGNORE;
    }
    return false;
  };
  const handleChange = ({ fileList: newFileList }) => {
    setLoading(false);
    setFileList(newFileList);
  };
  const uploadButton = (
    <button
      style={{
        border: 0,
        background: "none",
      }}
      type="button"
    >
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </button>
  );
  const handleUpload = () => {
    const formData = new FormData();
    fileList.forEach((file) => {
      formData.append("photos", file.originFileObj);
    });
    formData.append("userId", userInfo.id);
    formData.append("content", content);
    postAxios("/post", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    }).then((data) => {
      if (data) {
        message.success("게시글을 공유 하였습니다.");
        setInit();
      } else {
        message.error("서버 이상!");
      }
    });
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
              <Space style={{ height: "500px", width: "70%" }}>
                <Upload
                  name="file"
                  listType="picture-card"
                  className="avatar-uploader"
                  multiple
                  fileList={fileList}
                  beforeUpload={beforeUpload}
                  onChange={handleChange}
                  showUploadList={{
                    showPreviewIcon: false,
                    showRemoveIcon: true,
                  }}
                >
                  {fileList.length >= 10 ? null : uploadButton}
                </Upload>
              </Space>
              <Flex vertical style={{ height: "500px", width: "30%" }}>
                <Space
                  style={{
                    marginTop: "10px",
                    marginLeft: "10px",
                    backgroundColor: "#222",
                  }}
                >
                  <ProfileImgName userInfo={userInfo} />
                </Space>
                <Space>
                  <Input
                    value={content}
                    onChange={(e) => {
                      setContent(e.target.value);
                    }}
                  />
                </Space>
                <Space>
                  <Button
                    type="primary"
                    onClick={handleUpload}
                    loading={loading}
                  >
                    공유하기
                  </Button>
                </Space>
              </Flex>
            </Flex>
          </Content>
        </Layout>
      </Modal>
      <Modal open={confirm} onOk={setInit} onCancel={() => setConfirm(false)}>
        게시글 작성을 중지하시겠습니까?
      </Modal>
    </>
  );
};

export default PostWrite;
