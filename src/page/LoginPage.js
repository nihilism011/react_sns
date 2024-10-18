import { Button, Input, Space, Modal } from "antd";
import axios from "axios";
import React, { useContext, useRef, useState } from "react";
import { LoginContext } from "../components/LoginContext";

const LoginPage = () => {
  const [modal, setModal] = useState(false);
  const userIdRef = useRef({ inputId: "", inputPwd: "" });
  const { state, actions } = useContext(LoginContext);
  const { setIsLoggedIn, setUserId, setUserName } = actions;
  const { isLoggedIn, userId, userName } = state;
  const fnLogin = () => {
    const url = "/user/login";
    axios.post(url, userIdRef.current).then(({ data }) => {
      if (data.state) {
        setIsLoggedIn(true);
        setUserId(data.id);
        setUserName(data.userName);
        alert("로그인 성공");
      } else {
        setModal(true);
      }
    });
  };
  const logout = () => {
    setIsLoggedIn(false);
    setUserId("");
  };
  if (isLoggedIn) {
    return (
      <>
        <div>아이디 : {userId}</div>
        <div>이름 : {userName}</div>
        <Button onClick={logout}>로그아웃</Button>
      </>
    );
  }
  return (
    <Space>
      <Input
        onChange={(e) => {
          userIdRef.current.inputId = e.target.value;
        }}
      ></Input>
      <Input
        onChange={(e) => {
          userIdRef.current.inputPwd = e.target.value;
        }}
      ></Input>
      <Button
        onClick={() => {
          fnLogin(userIdRef.current);
        }}
      >
        임시 로그인 버튼
      </Button>
      <Modal
        title="로그인 실패"
        open={modal}
        footer={
          <Button
            type="primary"
            onClick={() => {
              setModal(false);
            }}
          >
            확인
          </Button>
        }
        onOk={() => {
          setModal(false);
        }}
        onCancel={() => {
          setModal(false);
        }}
      >
        <p>입력한 정보가 올바르지 않습니다.</p>
      </Modal>
    </Space>
  );
};

export default LoginPage;
