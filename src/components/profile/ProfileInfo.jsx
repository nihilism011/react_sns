import { Avatar, Button, Col, Flex, message, Row, Upload } from "antd";
import React, { useState } from "react";
import { getAxios } from "../../lib/restAxios";
import { useRecoilState } from "recoil";
import { loginUserId } from "../../lib/atom";

const ProfileInfo = () => {
  const [userInfo, setUserInfo] = useRecoilState(loginUserId);
  const colStyle = {
    textAlign: "left",
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
            <Button>프로필 이미지 변경</Button>
          </Flex>
        </Col>
        <Col span={16}>
          <Row justify="start" align="middle">
            <Col span={5} style={colStyle}>
              {userInfo.userId}
            </Col>
            <Col span={6} style={colStyle}>
              <Button>프로필 편집</Button>
            </Col>
            <Col span={6} style={colStyle}>
              <Button>정보 수정</Button>
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
