import { Button, Layout } from "antd";
import React, { useEffect, useState } from "react";
import { getAxios } from "../lib/restAxios";

const MainPage = () => {
  const [posts, setPosts] = useState([]);
  const [lastId, setLastId] = useState(null);
  useEffect(() => {
    getAxios("/post/all", { lastId }).then((data) => {
      setPosts((pref) => pref.concat(data));
    });
  }, [lastId]);
  const addNextPage = () => {
    setLastId(posts[posts.length - 1].postId);
  };
  console.log(posts);
  console.log(lastId);
  if (posts.length === 0) {
    return <>로딩중</>;
  }
  return (
    <Layout>
      <Button onClick={addNextPage}>더보기</Button>
    </Layout>
  );
};

export default MainPage;
