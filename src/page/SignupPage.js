import React from "react";
import { Button, Input, Radio, Card, Form } from "antd";
import { postAxios } from "../lib/restAxios.js";
import axios from "axios";
import SignupResultPage from "./SignupResultPage.js";

const SignupPage = () => {
  const [form] = Form.useForm();
  return (
    <Card title="회원 가입" bordered={false} style={{ width: 400 }}>
      <Form
        layout="vertical"
        form={form}
        onFinish={(e) => {
          console.log(e);
          postAxios("/user/signup/submit", e);
        }}
      >
        <Form.Item
          label="아이디"
          name="userId"
          validateDebounce={1000}
          rules={[
            { required: true },
            () => ({
              validator: async (_, value) => {
                const { data } = await axios.get("/user/idCheck", {
                  params: { id: value },
                });
                if (data) return Promise.resolve();
                return Promise.reject(new Error("중복된 아이디가 있습니다."));
              },
            }),
            { min: 6, message: "아이디는 6자 이상 입력해주세요." },
            { max: 20, message: "아이디는 20자 이하로 입력해주세요" },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="비밀번호"
          name="password"
          rules={[
            { required: true },
            { min: 4, message: "패스워드는 4자 이상 입력해주세요." },
            { max: 20, message: "패스워드는 20자 이하로 입력해주세요" },
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          label="비밀번호 확인"
          name="pwdCheck"
          dependencies={["password"]}
          rules={[
            { required: true },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error("패스워드가 일치하지 않습니다.")
                );
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item label="이름" name="userName" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item
          label="이메일"
          name="email"
          validateDebounce={1000}
          rules={[
            { required: true },
            { type: "email", message: "email 형식에 맞게 입력해 주세요" },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item label="성별" name="gender" rules={[{ required: true }]}>
          <Radio.Group>
            <Radio value={"M"}>남자</Radio>
            <Radio value={"F"}>여자</Radio>
            <Radio value={"N"}>무성</Radio>
            <Radio value={"AH"}>아파치 공격 헬기</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            회원 가입
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default SignupPage;
