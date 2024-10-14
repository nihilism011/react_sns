import axios from "axios";
import dayjs from "dayjs";
import { useState, useEffect } from "react";
import { Button, Input, Space } from "antd";

const UserUpdatePage = ({ userId }) => {
  const [testUser, setTestUser] = useState({ id: "", name: "", createdAt: "" });

  useEffect(() => {
    async function fetchUser(id) {
      const url = `http://localhost:3001/test/${id}`;
      try {
        const { data } = await axios.get(url);
        const user = data[0];
        setTestUser({
          id: user.id,
          name: user.name,
          createdAt: dayjs(user.createdAt).format("YYYY년MM월DD일"),
        });
      } catch (err) {
        console.error("Error fetching user:", err);
      }
    }
    fetchUser(userId);
  }, [userId]);
  const changeValue = (e) => {
    setTestUser({ ...testUser, [e.target.name]: e.target.value });
  };
  async function updateName(id, name) {
    const url = `http://localhost:3001/test/${id}`;
    const res = await axios.patch(url, { id: userId, name: name });
    return res;
  }
  const updateUserName = async () => {
    const message = `이름을 ${testUser.name}으로 변경 하시겠습니까?`;
    if (window.confirm(message)) {
      const { data } = await updateName(testUser.id, testUser.name);
      if (data) {
        alert("변경되었습니다.");
      } else {
        alert("서버 오류");
      }
    }
  };
  return (
    <>
      <div>유저 아이디 : {testUser.id}</div>
      <div>가입일 : {testUser.createdAt}</div>
      <div>유저 이름 : {testUser.name}</div>
      <Space.Compact>
        <Input
          name="name"
          value={testUser.name}
          placeholder="name"
          onChange={(e) => changeValue(e)}
          addonBefore="이름 변경"
          onPressEnter={updateUserName}
        />
      </Space.Compact>

      <Button
        type="primary"
        color="primary"
        variant="outlined"
        onClick={updateUserName}
      >
        업데이트
      </Button>
    </>
  );
};

export default UserUpdatePage;
