import { useRef } from "react";
import { Button, Input, Space } from "antd";
import { useParams } from "react-router-dom";
import { useUser } from "../hooks/user";

const UserUpdatePage = () => {
  const { userId } = useParams();
  const [testUser, updateUserName] = useUser(userId);
  const inputRef = useRef(null);

  if (!testUser) return <>로딩중입니다.</>;
  return (
    <>
      <div>유저 아이디 : {testUser.id}</div>
      <div>가입일 : {testUser.createdAt}</div>
      <div>유저 이름 : {testUser.name}</div>
      <Space.Compact>
        <Input
          name="name"
          defaultValue={testUser.name}
          placeholder="name"
          onChange={(e) => {
            inputRef.current = e.target.value;
          }}
          addonBefore="이름 변경"
          onPressEnter={() => updateUserName(inputRef.current)}
        />
      </Space.Compact>

      <Button
        type="primary"
        color="primary"
        variant="outlined"
        onClick={() => updateUserName(inputRef.current)}
      >
        업데이트
      </Button>
    </>
  );
};

export default UserUpdatePage;
