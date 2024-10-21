import React, { useState } from "react";
import { useEffect } from "react";
import { getAxios } from "../lib/restAxios";

const Posts = ({ page }) => {
  const [pageNum, setPage] = useState(1);
  useEffect(() => {
    const url = "/post/all";
    const data = getAxios(url, { page: pageNum });
  }, [pageNum]);

  return <div>Posts</div>;
};

export default Posts;
