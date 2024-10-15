import React from "react";
import { useTestUser } from "../hooks/test.js";

const TestUserTable = ({ id }) => {
  const testUserList = useTestUser(id);
  const tds = testUserList.map((user) => {
    return (
      <tr key={user.id}>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.phone}</td>
      </tr>
    );
  });
  if (testUserList.length === 0) {
    return <div>로딩중</div>;
  }
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>이름</th>
            <th>메일</th>
            <th>번호</th>
          </tr>
        </thead>
        <tbody>{tds}</tbody>
      </table>
    </>
  );
};

export default TestUserTable;
