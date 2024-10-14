import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { updateName } from "../lib/userUpdate";
import axios from "axios";

export const useUser = (userId) => {
  const [testUser, setTestUser] = useState(null);
  const url = `http://localhost:3001/test/${userId}`;
  useEffect(() => {
    axios
      .get(url)
      .then(({ data }) => {
        const { id, name, createdAt } = data[0];
        console.log({ id, name, createdAt });
        setTestUser({
          id: id,
          name: name,
          createdAt: dayjs(createdAt).format("YYYY년MM월DD일"),
        });
      })
      .catch((err) => {
        console.error("Error fetching user:", err);
      });
  }, [url]);

  const updateUserName = (name) => {
    const message = `이름을 ${name}으로 변경 하시겠습니까?`;
    if (window.confirm(message)) {
      updateName(userId, name).then(({ data }) => {
        if (data) {
          setTestUser((prev) => ({ ...prev, name: name }));
          alert("변경되었습니다.");
        } else {
          alert("서버 오류");
        }
      });
    }
  };
  return [testUser, updateUserName];
};
