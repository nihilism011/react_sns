import { Image, Space, Spin } from "antd";
import { LoginContext } from "../components/LoginContext";
import { useContext, useEffect, useState } from "react";
import axios from "axios";

const ProfilePage = () => {
  const { state, actions } = useContext(LoginContext);
  const { user, setUser } = useState(null);
  const { userId } = state;
  const url = `/selectUser/${userId}`;
  useEffect(() => {
    axios.get(url).then(({ data }) => {
      //여기서 setUser 해줄것
    });
  }, [url]);

  return (
    <>
      <Space direction="horizontal" key={"1"}>
        <Space key={"2"}>
          <div>{userId}</div>
        </Space>
        <Space key={"3"}></Space>
      </Space>
    </>
  );
};

export default ProfilePage;
