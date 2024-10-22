import { Button, Layout } from "antd";
import React, { useEffect, useState } from "react";
import { getAxios } from "../lib/restAxios";
import Post from "../components/Post";

const MainPage = () => {
  const [posts, setPosts] = useState([]);
  const [lastId, setLastId] = useState(null);
  useEffect(() => {
    getAxios("/post/all", { lastId }).then((data) => {
      setPosts((pref) =>
        data.length !== 0 &&
        (pref.length === 0 ||
          pref[pref.length - 1].postId !== data[data.length - 1].postId)
          ? pref.concat(data)
          : pref
      );
    });
  }, [lastId]);
  const addNextPage = () => {
    setLastId(posts[posts.length - 1].postId);
  };
  if (posts.length === 0) {
    return <>로딩중</>;
  }
  return (
    <Layout>
      {posts.map((post) => (
        <Post post={post} key={post.postId}></Post>
      ))}
      <Button onClick={addNextPage}>더보기</Button>
    </Layout>
  );
};

export default MainPage;
