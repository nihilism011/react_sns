import { Avatar, Button, Col, Flex, message, Row, Upload } from "antd";
import React, { useState } from "react";
import { getAxios } from "../../lib/restAxios";

const ProfileInfo = () => {
  const [userInfo, setUserInfo] = useState(getAxios("/selectUser/1"));
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
              src={"/static/keyboardSample.jpg"}
            />
            <Button>프로필 이미지 변경</Button>
          </Flex>
        </Col>
        <Col span={16}>
          <Row justify="start" align="middle">
            <Col span={5} style={colStyle}>
              유저이름
            </Col>
            <Col span={5} style={colStyle}>
              프로필 편집
            </Col>
            <Col span={5} style={colStyle}>
              개인정보
            </Col>
            <Col span={2} style={colStyle}>
              로그 아웃
            </Col>
          </Row>
          <Row justify="start" align="middle">
            <Col span={6} style={colStyle}>
              게시물 2
            </Col>
            <Col span={6} style={colStyle}>
              팔로워 2
            </Col>
            <Col span={6} style={colStyle}>
              팔로우 2
            </Col>
          </Row>
          <Row justify="start" align="middle">
            <Col span={24} style={colStyle}>
              자기소개같은거
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default ProfileInfo;
