import { useRef, useState } from "react";
import { Button, Input, Radio, Card } from "antd";
import { formSubmit } from "../lib/userLib.js";
const SignupPage = () => {
  const submitForm = useRef({
    userId: "",
    userName: "",
    password: "",
    email: "",
    gender: "",
  });
  const inputChange = (e) => {
    submitForm.current = {
      ...submitForm.current,
      [e.target.name]: e.target.value,
    };
  };
  const pwdCheck = useRef(null);
  const [isPwdCheck, setIsPwdCheck] = useState(null);
  return (
    <Card title="회원 가입" bordered={false} style={{ width: 400 }}>
      아이디
      <Input
        name="userId"
        onChange={(e) => {
          inputChange(e);
        }}
      ></Input>
      비번
      <Input
        name="password"
        onChange={(e) => {
          inputChange(e);
        }}
      ></Input>
      비번 확인
      <Input
        onChange={(e) => {
          pwdCheck.current = e.target.value;
        }}
      ></Input>
      이름
      <Input
        name="userName"
        onChange={(e) => {
          inputChange(e);
        }}
      ></Input>
      이메일
      <Input
        name="email"
        onChange={(e) => {
          inputChange(e);
        }}
      ></Input>
      성별
      <Radio.Group
        name="gender"
        onChange={(e) => {
          inputChange(e);
        }}
      >
        <Radio value={"M"}>남자</Radio>
        <Radio value={"F"}>여자</Radio>
        <Radio value={"N"}>무성</Radio>
        <Radio value={"AH"}>아파치 공격 헬기</Radio>
      </Radio.Group>
      <Button
        type="primary"
        onClick={() => {
          formSubmit(submitForm);
        }}
      >
        회원 가입
      </Button>
    </Card>
  );
};

export default SignupPage;
