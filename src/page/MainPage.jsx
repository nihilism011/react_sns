import { Button, Layout, Spin } from "antd";
import React, { useEffect, useRef, useState } from "react";
import { getAxios } from "../lib/restAxios";
import Post from "../components/post/Post";

const MainPage = () => {
  const [isMoreBtn, setIsMoreBtn] = useState(true);
  const [posts, setPosts] = useState([]);
  const [lastId, setLastId] = useState(null);
  useEffect(() => {
    getAxios("/post/lastFivePostToId", { lastId }).then((data) => {
      getAxios("post/firstPost").then((firstId) => {
        if (firstId === data[data.length - 1].postId) {
          setIsMoreBtn(false);
        }
      });
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
    return <Spin></Spin>;
  }
  return (
    <Layout
      style={{
        display: "flex",
        minHeight: "100vh",
        alignItems: "center",
        justifyContent: "start",
      }}
    >
      {posts.map((post) => (
        <Post post={post} key={post.postId}></Post>
      ))}
      {isMoreBtn && (
        <Button style={{ width: 500, height: 100 }} onClick={addNextPage}>
          더보기
        </Button>
      )}
    </Layout>
  );
};

export default MainPage;
