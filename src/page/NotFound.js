import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <div>그런 페이지 없음</div>
      <Link to={"/"}>메인페이지 돌아가기</Link>
    </>
  );
};

export default NotFound;
