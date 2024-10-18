import { Button, Result } from "antd";
import React from "react";

const SignupResultPage = () => {
  return (
    <Result
      status="success"
      title="회원가입 잘 되었음."
      subTitle="아직 사이트에 만든 기능이 없으니 이제 돌아가시오. 아래 버튼은 눌러도 소용 없을것"
      extra={[
        <Button type="primary" key="console">
          로그인 하러 가기
        </Button>,
      ]}
    />
  );
};

export default SignupResultPage;
