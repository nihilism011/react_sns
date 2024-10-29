import React, { useState } from "react";
import "../styles/postPage.css";
import { Button, message } from "antd";
import ProfileImgName from "../components/post/ProfileImgName";
import { useRecoilValue } from "recoil";
import { loginUserId } from "../lib/atom";
import { CloseOutlined, LeftOutlined, RightOutlined } from "@ant-design/icons";
import { postAxios } from "../lib/restAxios";
import { useNavigate } from "react-router-dom";

const PostPage = () => {
  const userInfo = useRecoilValue(loginUserId);
  const [files, setFiles] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [content, setContent] = useState("");
  const navigate = useNavigate();
  const setInit = () => {
    setFiles([]);
    setCurrentIndex(0);
    setContent("");
  };
  const handleImageUpload = (event) => {
    const selectedFiles = Array.from(event.target.files);
    if (selectedFiles.length + files.length > 12) {
      message.error("이미지는 최대 12개까지 업로드 할 수 있습니다.");
      return;
    }
    setFiles((prevFiles) => [...prevFiles, ...selectedFiles]);
  };
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % files.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + files.length) % files.length
    );
  };
  const removeImage = () => {
    setFiles((prevFiles) => {
      const newFiles = [...prevFiles];
      newFiles.splice(currentIndex, 1); // 현재 인덱스의 파일을 제거
      if (newFiles.length === 0) {
        setCurrentIndex(0); // 파일이 없으면 인덱스를 0으로 초기화
      } else if (currentIndex >= newFiles.length) {
        setCurrentIndex(newFiles.length - 1); // 마지막 파일 삭제 시 인덱스를 조정
      }
      return newFiles;
    });
  };
  const handleUpload = () => {
    if (files.length === 0) {
      message.error("이미지가 1장 이상 필요합니다.");
      return;
    }
    const formData = new FormData();
    files.forEach((file) => {
      formData.append("photos", file);
    });
    formData.append("userId", userInfo.id);
    formData.append("content", content);
    postAxios("/post", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    }).then((data) => {
      if (data) {
        message.success("게시글을 공유 하였습니다.");
        setInit();
        navigate("/");
      } else {
        message.error("서버 이상!");
      }
    });
  };
  return (
    <div className="writeContainer">
      <div className="writeHeader">공유하기</div>
      <div className="writeContent">
        <div className="writePhotoContainer">
          {files.length === 0 ? (
            <>
              <label htmlFor="imgFile">
                <div className="btn-upload">imgUpload</div>
              </label>
              <input
                multiple
                type="file"
                accept="image/*"
                name="file"
                id="imgFile"
                onChange={handleImageUpload}
              />
            </>
          ) : (
            <div className="imgSliderContainer">
              <div className="image-slider">
                <Button onClick={prevImage} icon={<LeftOutlined />} />
                <div className="imgBox">
                  <img
                    className="slideImage"
                    src={URL.createObjectURL(files[currentIndex])}
                    alt={`Uploaded ${currentIndex}`}
                  />
                  {files.length < 12 && (
                    <div className="addUpLoadDiv">
                      <label htmlFor="imgFile">
                        <div className="btn-uploadAdd">addImage</div>
                      </label>
                      <input
                        multiple
                        type="file"
                        accept="image/*"
                        name="file"
                        id="imgFile"
                        onChange={handleImageUpload}
                      />
                    </div>
                  )}
                </div>
                <Button onClick={nextImage} icon={<RightOutlined />} />
              </div>
              <div className="imgState">
                {currentIndex + 1} / {files.length}
              </div>
              <Button
                className="imgRemoveButton"
                icon={<CloseOutlined />}
                onClick={removeImage}
              />
            </div>
          )}
        </div>
        <div className="writeUserInput">
          <div className="writeUserInfo">
            <ProfileImgName userInfo={userInfo} />
          </div>
          <div className="writeTextAreaDiv">
            <textarea
              className="writeTextArea"
              onChange={(e) => {
                setContent(e.target.value);
              }}
            ></textarea>
          </div>
          <div className="submitButtonArea">
            <Button onClick={handleUpload}>공유하기</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostPage;
