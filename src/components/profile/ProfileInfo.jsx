import { Avatar, Button, Col, Flex, message, Row, Upload } from "antd";
import React, { useState } from "react";
import { postAxios } from "../../lib/restAxios";
import { useRecoilState } from "recoil";
import { loginUserId } from "../../lib/atom";
import { useNavigate } from "react-router-dom";
const ProfileInfo = () => {
  const [userInfo, setUserInfo] = useRecoilState(loginUserId);
  const colStyle = {
    textAlign: "left",
  };
  const navigate = useNavigate();
  const logOut = () => {
    sessionStorage.removeItem("token");
    setUserInfo(null);
    navigate("/");
  };
  console.log(userInfo);
  const handleProfileImg = (e) => {
    const image = Array.from(e.target.files);
    const formData = new FormData();
    image.forEach((img) => {
      formData.append("profiles", img);
    });
    formData.append("userId", userInfo.id);
    formData.append("profileId", userInfo.userId);
    postAxios("/user/profileChange", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    }).then((data) => {
      message.success("프로필사진을 변경하였습니다.");
    });
  };
  return (
    <>
      <Row
        justify="center"
        align="middle"
        style={{ marginTop: 30, marginBottom: 50 }}
      >
        <Col span={8}>
          <Flex vertical justify="center" align="center">
            <Avatar
              size={128}
              style={{ marginBottom: 10 }}
              src={`/profile/${userInfo.profileImg ?? "non.png"}`}
            />
            <label htmlFor="profileChange">
              <div
                style={{
                  border: "1px solid black",
                  borderRadius: "5px",
                  padding: 5,
                }}
              >
                프로필 이미지 변경
              </div>
            </label>
            <input
              id="profileChange"
              type="file"
              style={{ display: "none" }}
              onChange={handleProfileImg}
            />
          </Flex>
        </Col>
        <Col span={16}>
          <Row justify="start" align="middle">
            <Col span={6} style={colStyle}>
              {userInfo.userId}
            </Col>
            <Col span={6} style={colStyle}>
              <Button type="primary" onClick={logOut}>
                로그 아웃
              </Button>
            </Col>
          </Row>
          <Row justify="start" align="middle" style={{ marginTop: 15 }}>
            <Col span={6} style={colStyle}>
              게시물 {userInfo.postCnt}
            </Col>
            <Col span={6} style={colStyle}>
              팔로워 {userInfo.likeMe}
            </Col>
            <Col span={6} style={colStyle}>
              팔로우 {userInfo.iLike}
            </Col>
          </Row>
          <Row justify="start" align="middle" style={{ marginTop: 30 }}>
            <Col span={24} style={colStyle}>
              {userInfo.comment}
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default ProfileInfo;
