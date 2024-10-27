import { Button, Input, Modal, Card, Flex } from "antd";
import logo from "../logo.svg";
import axios from "axios";
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./loginStyle.css";
const LoginPage = () => {
  const [modal, setModal] = useState({ status: false, massage: "" });
  const userIdRef = useRef({ inputId: "", inputPwd: "" });
  const fnLogin = () => {
    const url = "/nonAuth/login";
    axios.post(url, userIdRef.current).then(({ data }) => {
      if (data.state) {
        sessionStorage.setItem("token", data.token);
        window.location.reload(true);
      } else {
        if (data.reason === "id") {
          setModal({
            status: true,
            massage: "입력한 아이디가 존재하지 않습니다.",
          });
        } else {
          setModal({
            status: true,
            massage: "아이디와 비밀번호가 다릅니다.",
          });
        }
      }
    });
  };
  return (
    <div className="loginContainer">
      <div className="cardContainer">
        <Card className="loginCard">
          <Flex vertical>
            <Link>
              <img alt="alt" src={logo} />
            </Link>
            <Input
              placeholder="id"
              onPressEnter={() => {
                fnLogin(userIdRef.current);
              }}
              onChange={(e) => {
                userIdRef.current.inputId = e.target.value;
              }}
            ></Input>
            <Input
              placeholder="password"
              onPressEnter={() => {
                fnLogin(userIdRef.current);
              }}
              onChange={(e) => {
                userIdRef.current.inputPwd = e.target.value;
              }}
            ></Input>
            <Button
              onClick={() => {
                fnLogin(userIdRef.current);
              }}
            >
              로그인
            </Button>
            <Link to={"/signup"}>회원가입</Link>
          </Flex>
        </Card>
      </div>
      <Modal
        title="로그인 실패"
        open={modal.status}
        footer={
          <Button
            type="primary"
            onClick={() => {
              setModal({ status: false, massage: "" });
            }}
          >
            확인
          </Button>
        }
        onOk={() => {
          setModal({ status: false, massage: "" });
        }}
        onCancel={() => {
          setModal({ status: false, massage: "" });
        }}
      >
        <p>{modal.massage}</p>
      </Modal>
    </div>
  );
};

export default LoginPage;
